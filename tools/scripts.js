// Add Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: 'en,vi', // English and Vietnamese
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        },
        'google_translate_element'
    );
}

// Style fixes for Google Translate
document.addEventListener('DOMContentLoaded', function() {
    // Hide Google Translate attribution
    const style = document.createElement('style');
    style.textContent = `
        .goog-te-banner-frame.skiptranslate {
            display: none !important;
        } 
        body {
            top: 0px !important; 
        }
        .goog-te-combo {
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid var(--primary-color);
            background-color: white;
            color: var(--text-color);
            cursor: pointer;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);
});


// 11/28/2024 Add pop-up for each section

// Add this to your existing script.js
const toolsContent = {
    'IDE & Visual Studio': {
        title: 'Installing and Using Visual Studio Code',
        content: `
            <h3>Installation Steps:</h3>
            <ol class="installation-steps">
                <li>Visit <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a></li>
                <li>Download the appropriate version for your operating system</li>
                <li>Run the installer and follow the installation wizard</li>
                <li>Launch VS Code after installation</li>
            </ol>

            <h3>Essential Extensions:</h3>
            <ul class="installation-steps">
                <li>Python</li>
                <li>JavaScript and TypeScript</li>
                <li>Live Server</li>
                <li>Git Lens</li>
                <li>Prettier - Code formatter</li>
            </ul>

            <h3>Basic Usage:</h3>
            <div class="usage-examples">
                <p>• Open folder: File > Open Folder</p>
                <p>• Create new file: File > New File</p>
                <p>• Open terminal: View > Terminal</p>
                <p>• Command palette: Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac)</p>
            </div>

            <div class="resource-links">
                <h3>Useful Resources:</h3>
                <a href="https://code.visualstudio.com/docs" target="_blank">Official Documentation</a>
                <a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks" target="_blank">Tips and Tricks</a>
                <a href="https://marketplace.visualstudio.com/VSCode" target="_blank">VS Code Marketplace</a>
            </div>
        `
    },
    'Version Control & GitHub': {
        title: 'Setting up Git and GitHub',
        content: `
            <h3>Installation Steps:</h3>
            <ol class="installation-steps">
                <li>Download Git from <a href="https://git-scm.com/" target="_blank">https://git-scm.com/</a></li>
                <li>Install Git following the installation wizard</li>
                <li>Create a GitHub account at <a href="https://github.com/" target="_blank">https://github.com/</a></li>
                <li>Configure Git with your credentials:
                    <pre class="usage-examples">
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"</pre>
                </li>
            </ol>

            <h3>Basic Git Commands:</h3>
            <div class="usage-examples">
                <p>git init - Initialize a repository</p>
                <p>git add . - Stage all changes</p>
                <p>git commit -m "message" - Commit changes</p>
                <p>git push - Push to remote repository</p>
                <p>git pull - Pull from remote repository</p>
            </div>

            <div class="resource-links">
                <h3>Useful Resources:</h3>
                <a href="https://docs.github.com/en/get-started" target="_blank">GitHub Getting Started Guide</a>
                <a href="https://git-scm.com/doc" target="_blank">Git Documentation</a>
                <a href="https://education.github.com/git-cheat-sheet-education.pdf" target="_blank">Git Cheat Sheet</a>
            </div>
        `
    },
    // Add more tools following the same pattern...
};

// Add event listeners for learn more buttons
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');

    // Add click event to all learn more buttons
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const toolTitle = this.closest('.tool-card').querySelector('h3').textContent;
            const toolInfo = toolsContent[toolTitle];
            
            if (toolInfo) {
                popupTitle.textContent = toolInfo.title;
                popupContent.innerHTML = toolInfo.content;
                popup.style.display = 'block';
            }
        });
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});