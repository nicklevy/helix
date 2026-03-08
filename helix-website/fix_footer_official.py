import os
import re

# The new footer logos div using official image URLs found in the codebase
new_footer_logos = """            <div style="display: flex; gap: 1.5rem; margin-top: 1.25rem; align-items: center;">
              <!-- Xero Certified Advisor Logo -->
              <div style="height: 48px; padding: 4px; background: white; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <img src="https://i0.wp.com/helixbusinessservices.co.uk/wp-content/uploads/2021/01/xero-certified-advisor-logo-hires-RGB.png" alt="Xero Certified Advisor" style="height: 100%; width: auto; display: block;" />
              </div>
              <!-- ICB Member Logo -->
              <div style="height: 48px; padding: 4px; background: white; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <img src="https://helixbusinessservices.co.uk/wp-content/uploads/2016/12/icb-logo-e1481891613465.png" alt="ICB Logo" style="height: 100%; width: auto; display: block;" />
              </div>
            </div>"""

# Updated pattern to match my previous SVG block more precisely
# It matches from the start of the logo container div to its end, including the SVGs I added
pattern = re.compile(r'<div style="display: flex; gap: 1.5rem; margin-top: 1\.(25|5)rem; align-items: center;">.*?<!-- Xero Partner Logo.*?<!-- ICB (Member )?Logo.*?<\/div>\s*<\/div>', re.DOTALL)

updated_files = []

for root, dirs, files in os.walk('.'):
    for name in files:
        if name.endswith('.html'):
            filepath = os.path.join(root, name)
            with open(filepath, 'r') as f:
                content = f.read()
            
            new_content = pattern.sub(new_footer_logos, content)
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                updated_files.append(filepath)

if updated_files:
    print(f"Updated {len(updated_files)} files: {', '.join(updated_files)}")
else:
    print("No matches found to update.")
