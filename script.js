// Toggle between views
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const view = button.dataset.view;
        
        // Update active button
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Update active view
        document.querySelectorAll('.view').forEach(v => {
            v.classList.remove('active');
        });
        document.getElementById(`${view}-view`).classList.add('active');
    });
});

// Copy to clipboard functionality
document.querySelectorAll('code').forEach(codeElement => {
    codeElement.addEventListener('click', () => {
        const text = codeElement.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = codeElement.textContent;
            codeElement.textContent = '✓ Copied!';
            setTimeout(() => {
                codeElement.textContent = originalText;
            }, 5000);
        });
    });
});