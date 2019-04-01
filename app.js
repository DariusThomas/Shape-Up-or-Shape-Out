$(document).ready(function () {
    let $canvas = $('#canvas');
    let $shapeInfo = $('#shape-info');
    let $rectBtn = $("#rectangle-btn");
    let $sqrBtn = $('#square-btn');
    let $circleBtn = $('#circle-btn');
    let $triangleBtn = $('#triangle-btn');

    $rectBtn.click(drawRect)
    $sqrBtn.click(drawSqr)
    $circleBtn.click(drawCircle)
    $triangleBtn.click(drawTriangle)


    class Shape {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.area = this.area()
            this.perimeter = this.perimeter();
            this.div = $("<div></div>");
            this.div.dblclick(function () {
                this.div.remove()
            }.bind(this))
            this.div.click(this.describe.bind(this))
            this.div.appendTo($canvas);
        }
        area() {
            let area = Math.round(this.width * this.height)
            return area
        }
        perimeter() {
            let perimeter = Math.round((2 * this.width) + (2 * this.height))
            return perimeter
        }

        describe() {
            let $listedInfo = $(`<li> Name: ${this.constructor.name} </li><li>Area: ${this.area} </li><li>Perimeter: ${this.perimeter}</li>`)
            $shapeInfo.empty()
            $shapeInfo.append($listedInfo)
        }
    }

    class Rectangle extends Shape {
        constructor(width, height) {
            super(width, height);
            this.width = width;
            this.height = height;
            this.div.css({
                "height": `${this.height}`,
                "width": `${this.width}`,
                "background-color": "green",
                "position": "absolute",
                "top": `${Math.floor(Math.random() * 600)}px`,
                "left": `${Math.floor(Math.random() * 600)}px`
            })
        }
        describe() {
            let $listedInfo = $(`<li> Name: ${this.constructor.name} </li><li>Width: ${this.width} px</li><li> Height: ${this.height}px</li><li>Area: ${this.area} sq px</li><li>Perimeter: ${this.perimeter} px</li>`)
            $shapeInfo.empty()
            $shapeInfo.append($listedInfo)
        }
    }

    class Square extends Rectangle {
        constructor(width, height) {
            super(width, height);
            this.sideLength = this.width
            this.div.css({
                "height": `${this.height}`,
                "width": `${this.width}`,
                "background-color": "red",
                "position": "absolute",
                "top": `${Math.floor(Math.random() * 600)}px`,
                "left": `${Math.floor(Math.random() * 600)}px`
            })
        }
        describe() {
            let $listedInfo = $(`<li> Name: ${this.constructor.name} </li><li>Side Length: ${this.sideLength} px</li><li>Area: ${this.area} sq px</li><li>Perimeter: ${this.perimeter} px</li>`)
            $shapeInfo.empty()
            $shapeInfo.append($listedInfo)
        }
    }
    class Circle extends Shape {
        constructor(width, height) {
            super(width, height);
            this.radius = height;
            this.div.css({
                "height": `${this.height}`,
                "width": `${this.width}`,
                "background-color": "purple",
                "border-radius": "50%",
                "position": "absolute",
                "top": `${Math.floor(Math.random() * 600)}px`,
                "left": `${Math.floor(Math.random() * 600)}px`
            })
        }
        area() {
            let area = Math.round(Math.PI * this.width * this.height)
            return area
        }
        perimeter() {
            let perimeter = Math.round(Math.PI * 2 * this.width)
            return perimeter
        }
        describe() {
            let $listedInfo = $(`<li> Name: ${this.constructor.name} </li><li>Radius: ${this.radius} px</li><li>Area: ${this.area} sq px</li><li>Circumference: ${this.perimeter} px</li>`)
            $shapeInfo.empty()
            $shapeInfo.append($listedInfo)
        }
    }

    class Triangle extends Shape {
        constructor(width, height) {
            super(width, height);
            this.height = height;
            this.width = width;
            this.div.css({
                "height": `${this.height}`,
                "width": `${this.width}`,
                "border-bottom": `${this.width}px solid yellow`,
                "border-left": `${this.height}px solid yellow`,
                "border-top": `${this.width}px solid transparent`,
                "border-right": `${this.height}px solid transparent`,
                "position": "absolute",
                "top": `${Math.floor(Math.random() * 600)}px`,
                "left": `${Math.floor(Math.random() * 600)}px`
            })
        }
        area() {
            let area = Math.round(.5 * this.height * this.width)
            return area
        }
        perimeter() {
            let perimeter = Math.round(2 * this.height + Math.sqrt(2) * this.height)
            return perimeter
        }
        describe() {
            let $listedInfo = $(`<li> Name: ${this.constructor.name} </li><li>Base: ${this.width} px</li><li>Height: ${this.height}px</li><li>Area: ${this.area} sq px</li><li>Perimeter: ${this.perimeter} px</li>`)
            $shapeInfo.empty()
            $shapeInfo.append($listedInfo)
        }
    }


    function drawRect() {
        let widthVal = $('#rectangle-width').val()
        let heightVal = $('#rectangle-height').val()
        let rect = new Rectangle(widthVal, heightVal);

    }

    function drawSqr() {
        let length = $('#square-length').val()
        let sqr = new Square(length, length);
    }

    function drawCircle() {
        let radius = $('#circle-radius').val()
        let circ = new Circle(radius, radius);
    }

    function drawTriangle() {
        let height = $('#triangle-height').val()
        let tri = new Triangle(height, height)
    }
})