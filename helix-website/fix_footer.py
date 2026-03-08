import os
import re

new_footer_content = """            <div style="display: flex; gap: 1.5rem; margin-top: 1.25rem; align-items: center;">
              <!-- Xero Partner Logo (SimpleIcons) -->
              <div style="height: 48px; width: 48px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; padding: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <title>Xero</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.585 14.655c-1.485 0-2.69-1.206-2.69-2.689 0-1.485 1.207-2.691 2.69-2.691 1.485 0 2.69 1.207 2.69 2.691s-1.207 2.689-2.69 2.689zM7.53 14.644c-.099 0-.192-.041-.267-.116l-2.043-2.04-2.052 2.047c-.069.068-.16.108-.258.108-.202 0-.368-.166-.368-.368 0-.099.04-.191.111-.263l2.04-2.05-2.038-2.047c-.075-.069-.113-.162-.113-.261 0-.203.166-.366.368-.366.098 0 .188.037.258.105l2.055 2.048 2.048-2.045c.069-.071.162-.108.26-.108.211 0 .375.165.375.366 0 .098-.029.188-.104.258l-2.056 2.055 2.055 2.051c.068.069.104.16.104.258 0 .202-.165.368-.365.368h-.01zm8.017-4.591c-.796.101-.882.476-.882 1.404v2.787c0 .202-.165.366-.366.366-.203 0-.367-.165-.368-.366v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm-3.091 2.205H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66-.255.164-.525.284-.811.345-.33.09-.645.104-.975.06-1.095-.135-2.01-.93-2.28-2.01-.06-.21-.09-.42-.09-.645 0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81l.068-.046zm6.129-2.223c-1.064 0-1.931.865-1.931 1.931 0 1.064.866 1.931 1.931 1.931s1.931-.867 1.931-1.931c0-1.065-.866-1.933-1.931-1.933v.002zm0 2.595c-.367 0-.666-.297-.666-.666 0-.367.3-.665.666-.665.367 0 .667.299.667.665 0 .369-.3.667-.667.666zm-8.04-2.603c-.91 0-1.672.623-1.886 1.466v.03h3.776c-.203-.855-.973-1.494-1.891-1.494v-.002z" fill="#13B5EA"/></svg>
            </div>
            <!-- ICB Member Logo -->
            <div style="height: 48px; width: 48px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; padding: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M50 5 L15 20 L15 50 C15 75 50 95 50 95 C50 95 85 75 85 50 L85 20 L50 5 Z" fill="#4C2A85" />
                <path d="M50 15 L75 25 L75 50 C75 68 50 85 50 85 C50 85 25 68 25 50 L25 25 L50 15 Z" fill="white" />
                <text x="50" y="55" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#4C2A85" text-anchor="middle">ICB</text>
                <path d="M50 10 L50 15 M30 18 L35 22 M70 18 L65 22" stroke="#4C2A85" stroke-width="2" />
              </svg>
            </div>
          </div>"""

# Robust pattern to match the previous logo container and its contents
pattern = re.compile(r'<div style="display: flex; gap: 1.5rem; margin-top: 1.5rem; align-items: center;">.*?<!-- ICB Logo -->\s*<div style="height: 48px; width: 48px;.*?<\/div>\s*<\/div>', re.DOTALL)

for root, dirs, files in os.walk('.'):
    for name in files:
        if name.endswith('.html'):
            filepath = os.path.join(root, name)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Use regex to find and replace the block, preserving the leading indentation if possible
            # But here we'll just replace the whole block found
            new_content = pattern.sub(new_footer_content, content)
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
