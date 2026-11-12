const { submitAssignment, submissions } = require('../public/app');

beforeEach(() => {
    // Har test run hone se pehle array ko clear kar do
    submissions.length = 0; 
});

// Test Case 1: Agar sab theek ho
test('Complete details and a valid submission URL', () => {
    const result = submitAssignment('Ali', 'FA20-BCS-001', 'DevOps Lab', 'https://github.com');
    expect(result.success).toBe(true);
    expect(submissions.length).toBe(1); // Check ke save ho gaya
});

// Test Case 2: Agar Registration Number missing ho
test('Missing registration number', () => {
    const result = submitAssignment('Ali', '', 'DevOps Lab', 'https://github.com');
    expect(result.success).toBe(false);
    expect(result.message).toContain('Validation Error');
    expect(submissions.length).toBe(0); // Check ke save nahi hua
});

// Test Case 3: Agar URL galat ho
test('Invalid submission URL', () => {
    const result = submitAssignment('Ali', 'FA20-BCS-001', 'DevOps Lab', 'invalid-url');
    expect(result.success).toBe(false);
    expect(result.message).toContain('Invalid submission URL');
    expect(submissions.length).toBe(0); // Check ke save nahi hua
});