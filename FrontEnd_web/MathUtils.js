class MathUtils {
    static sum(numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }

    static average(numbers) {
        const sum = this.sum(numbers);
        return sum / numbers.length;
    }

    static max(numbers) {
        return Math.max(...numbers);
    }

    static min(numbers) {
        return Math.min(...numbers);
    }
}
const numbers = [5, 2, 9, 1, 7];
console.log('Sum:', MathUtils.sum(numbers)); // Output: 24
console.log('Average:', MathUtils.average(numbers)); // Output: 4.8
console.log('Max:', MathUtils.max(numbers)); // Output: 9
console.log('Min:', MathUtils.min(numbers)); // Output: 1
