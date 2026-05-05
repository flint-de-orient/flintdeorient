import os
from PIL import Image

logo_dir = r'src/assets/logos'
new_files = ['assam_school.png', 'sikira.png', 'nawjan.png']
for filename in new_files:
    filepath = os.path.join(logo_dir, filename)
    if os.path.exists(filepath):
        img = Image.open(filepath).convert('RGBA')
        datas = img.getdata()

        newData = []
        for item in datas:
            brightness = (item[0] + item[1] + item[2]) / 3.0
            new_alpha = 255 - brightness
            final_alpha = int(new_alpha * (item[3] / 255.0))
            newData.append((255, 255, 255, final_alpha))
                
        img.putdata(newData)
        base = os.path.splitext(filename)[0]
        img.save(os.path.join(logo_dir, base + '_white.png'), 'PNG')
        print(f'Processed {filename}')
