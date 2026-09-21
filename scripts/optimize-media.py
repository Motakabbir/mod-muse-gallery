import os
import shutil
import subprocess
import glob

VIDEO_DIR = "src/assets/video"
BACKUP_DIR = "src/assets/video_backup"
POSTER_DIR = "src/assets/image/posters"

os.makedirs(BACKUP_DIR, exist_ok=True)
os.makedirs(POSTER_DIR, exist_ok=True)

video_files = sorted(glob.glob(os.path.join(VIDEO_DIR, "*.mp4")))

total_orig = 0
total_new = 0

print(f"Found {len(video_files)} videos to optimize...")

for vpath in video_files:
    fname = os.path.basename(vpath)
    bname, _ = os.path.splitext(fname)
    backup_path = os.path.join(BACKUP_DIR, fname)
    
    # 1. Backup if not backed up yet
    if not os.path.exists(backup_path):
        shutil.copy2(vpath, backup_path)
    
    orig_size = os.path.getsize(backup_path)
    total_orig += orig_size
    
    # 2. Extract poster image
    poster_path = os.path.join(POSTER_DIR, f"{bname}-poster.webp")
    cmd_poster = [
        "ffmpeg", "-y", "-ss", "0.5", "-i", backup_path,
        "-frames:v", "1", "-vf", "scale='min(1280,iw)':-2",
        "-c:v", "libwebp", "-q:v", "80",
        poster_path
    ]
    res_poster = subprocess.run(cmd_poster, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if res_poster.returncode != 0:
        # Retry at 0.0s if 0.5s failed
        cmd_poster[2] = "0.0"
        subprocess.run(cmd_poster, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    # 3. Optimize video
    temp_opt = f"/tmp/opt_{fname}"
    # Target 1280 width max (or 1080 if square/vertical), CRF 27, preset slow, faststart, no audio
    cmd_opt = [
        "ffmpeg", "-y", "-i", backup_path,
        "-vf", "scale='min(1280,iw)':-2",
        "-c:v", "libx264", "-crf", "27", "-preset", "slow",
        "-pix_fmt", "yuv420p",
        "-an",
        "-movflags", "+faststart",
        temp_opt
    ]
    subprocess.run(cmd_opt, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    # Overwrite original with optimized
    shutil.move(temp_opt, vpath)
    
    new_size = os.path.getsize(vpath)
    total_new += new_size
    poster_size = os.path.getsize(poster_path) if os.path.exists(poster_path) else 0
    
    print(f"{fname:35} {orig_size/(1024*1024):6.1f} MB -> {new_size/(1024*1024):5.1f} MB  (poster: {poster_size/1024:4.0f} KB)")

print("=" * 60)
print(f"TOTAL BEFORE: {total_orig/(1024*1024):.1f} MB")
print(f"TOTAL AFTER:  {total_new/(1024*1024):.1f} MB")
print(f"SAVINGS:      {(total_orig - total_new)/(1024*1024):.1f} MB ({((total_orig - total_new)/total_orig)*100:.1f}%)")
