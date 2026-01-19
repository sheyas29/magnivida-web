import os

# --- CONFIGURATION ---
OUTPUT_FILENAME = "PROJECT_V2.txt"

# Only scan these important folders
TARGET_FOLDERS = ["src"]

# Ignore these junk folders
IGNORE_FOLDERS = {
    "node_modules", ".git", ".next", "dist", "build",
    "coverage", "__pycache__", "assets", "public"
}

# Only look for these code files
TARGET_EXTENSIONS = {".ts", ".tsx", ".js", ".jsx", ".css", ".json"}

def scan_project():
    project_root = os.getcwd()
    output_path = os.path.join(project_root, OUTPUT_FILENAME)

    print(f"🚀 Scanning structure to fix 404s...")

    with open(output_path, 'w', encoding='utf-8') as outfile:
        outfile.write("=== DIRECTORY STRUCTURE ===\n")

        # 1. First, just print the TREE structure (so I see where files live)
        for root, dirs, files in os.walk(project_root):
            # Skip ignored folders
            dirs[:] = [d for d in dirs if d not in IGNORE_FOLDERS]

            level = root.replace(project_root, '').count(os.sep)
            indent = ' ' * 4 * (level)
            outfile.write(f"{indent}{os.path.basename(root)}/\n")
            subindent = ' ' * 4 * (level + 1)
            for f in files:
                if any(f.endswith(ext) for ext in TARGET_EXTENSIONS):
                    outfile.write(f"{subindent}{f}\n")

        outfile.write("\n=== FILE CONTENT PREVIEW ===\n")

        # 2. Then, read the content of key files
        for root, dirs, files in os.walk(project_root):
            dirs[:] = [d for d in dirs if d not in IGNORE_FOLDERS]

            for file in files:
                _, ext = os.path.splitext(file)
                if ext not in TARGET_EXTENSIONS:
                    continue

                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, project_root)

                # Only read src files to keep it small
                if not rel_path.startswith("src"):
                    continue

                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as infile:
                        outfile.write(f"\n--- START: {rel_path} ---\n")
                        outfile.write(infile.read())
                        outfile.write(f"\n--- END: {rel_path} ---\n")
                except Exception:
                    pass

    print(f"✅ Done! Upload '{OUTPUT_FILENAME}' here.")

if __name__ == "__main__":
    scan_project()
