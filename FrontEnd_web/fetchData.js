function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous API request
        setTimeout(() => {
            const success = Math.random() < 0.8; // 80% success rate for demonstration purposes

            if (success) {
                const data = { id: 1, name: 'John Doe', email: 'johndoe@example.com' };
                resolve(data);
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 1000); // Simulating a delay of 1 second
    });
}
async function fetchExampleData() {
    try {
        const url = 'https://api.example.com/data';
        const data = await fetchData(url);
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchExampleData();
