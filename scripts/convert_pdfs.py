import os
import pymupdf

pdf_dir = r"C:\Users\ACER\.gemini\antigravity-ide\brain\0c545999-a2a9-4902-a97d-9c90f7789ed1\.user_uploaded"
out_dir = r"c:\Users\ACER\OneDrive\Desktop\nirman-solution\nirman-solutions\public\images\blueprints"
os.makedirs(out_dir, exist_ok=True)

pdf_files = sorted([f for f in os.listdir(pdf_dir) if f.endswith(".pdf")])
print("Found PDFs:", pdf_files)

project_info = []

for idx, fname in enumerate(pdf_files):
    fpath = os.path.join(pdf_dir, fname)
    doc = pymupdf.open(fpath)
    print(f"\n--- PDF {idx+1}: {fname} (Pages: {len(doc)}) ---")
    
    first_page_text = doc[0].get_text()[:400].replace("\n", " ")
    print("Preview text:", first_page_text)
    
    # Identify project based on text
    proj_slug = f"project_{idx+1}"
    if "Mr. Aksahy" in doc[0].get_text() or "Beach Side" in doc[0].get_text() or "RESORT" in doc[0].get_text():
        proj_slug = "beachside-resort"
    elif "Shubham" in doc[0].get_text():
        proj_slug = "shubham-villa"
    elif "Aalam" in doc[0].get_text():
        proj_slug = "aalam-manor"
    elif "RISHIKESH" in doc[0].get_text():
        proj_slug = "rishikesh-residence"
        
    print(f"Matched slug: {proj_slug}")
    
    for page_idx, page in enumerate(doc):
        # Render high-resolution pixmap (2.5x zoom for crystal-clear readability)
        mat = pymupdf.Matrix(2.5, 2.5)
        pix = page.get_pixmap(matrix=mat)
        img_name = f"{proj_slug}-p{page_idx+1}.jpg"
        save_path = os.path.join(out_dir, img_name)
        pix.save(save_path)
        print(f"Saved: {img_name} ({pix.width}x{pix.height})")

print("\nDone extracting all blueprint pages!")
