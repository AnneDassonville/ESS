// Function to create a student record
function createStudentRecord(studentData) {
    // Validation logic
    if(!studentData.name || !studentData.age) {
        throw new Error('Name and Age are required.');
    }

    // Store in localStorage
    const studentRecords = JSON.parse(localStorage.getItem('students')) || [];
    studentRecords.push(studentData);
    localStorage.setItem('students', JSON.stringify(studentRecords));

    // Redirect to student details page
    window.location.href = `/student-details.html?id=${studentData.id}`;
}

// Example function call
try {
    createStudentRecord({id: 1, name: 'John Doe', age: 20});
} catch (e) {
    console.error(e.message);
}