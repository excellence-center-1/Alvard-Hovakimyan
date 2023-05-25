class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error('Invalid width value. Width must be a positive number.');
        }
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error('Invalid height value. Height must be a positive number.');
        }
    }

    getArea() {
        return this._width * this._height;
    }

    getPerimeter() {
        return 2 * (this._width + this._height);
    }
}
const rectangle = new Rectangle(5, 10);
console.log('Area:', rectangle.getArea()); // Output: 50
console.log('Perimeter:', rectangle.getPerimeter()); // Output: 30

rectangle.width = 8;
rectangle.height = 15;
console.log('Updated Area:', rectangle.getArea()); // Output: 120
console.log('Updated Perimeter:', rectangle.getPerimeter()); // Output: 46

rectangle.width = -2; // Invalid width value. Width must be a positive number.
rectangle.height = 0; // Invalid height value. Height must be a positive number.
