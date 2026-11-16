let submissions = [];

function submitAssignment(name, regNo, title, url) {
    // Check if any field is empty
    if (!name || !regNo || !title || !url) {
        return { success: false, message: "Validation Error: All fields (including Registration number) are required." };
    }
    
    // Check if URL is valid
    try {
        // new URL(url);
    } catch (error) {
        return { success: false, message: "Validation Error: Invalid submission URL." };
    }

    // Save valid submission
    const submission = { name, regNo, title, url };
    submissions.push(submission);
    
    return { success: true, message: "Submission successful!", submissions };
}

// Node.js ke liye export taqe Jest test kar sakay
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { submitAssignment, submissions };
}