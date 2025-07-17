# Matematica
link ==> https://matteoschi.github.io/Matematica/

# Interactive Physics Laws and Mathematical Curves Calculator

## Project Description
This repository contains an interactive web project developed using HTML, CSS, and JavaScript that allows users to input parameters into forms and receive real-time calculations of various fundamental physics laws and mathematical properties of conic sections (parabolas, ellipses, hyperbolas, circles).

The project provides a simple and intuitive interface where users can enter coefficients of equations, initial conditions for motion, masses and velocities for collisions, geometric parameters, and other physical data. The system calculates and displays the results with rounded values and brief explanations.

---

## Main Features

### 1. Dynamic Page Title on Window Focus/Blur
- When the browser window loses focus, the page title changes to "Come Back Soon" to grab the user’s attention.
- When focus is regained, the original page title is restored.

### 2. Quadratic Equation Solver and Parabola Properties
- By inputting coefficients `a`, `b`, and `c` of a quadratic equation `ax² + bx + c = 0`, the app calculates:
  - The discriminant (delta)
  - The real roots (if any)
  - The vertex coordinates of the parabola
  - The focus point coordinates
  - The equation of the directrix
- Special case for linear equations (`a = 0`) is handled.

### 3. Projectile Motion Calculator
- Given gravity, initial height, initial velocity, and launch angle (in degrees), calculates:
  - Time of flight (time until projectile returns to initial vertical position)
  - Horizontal displacement
  - Final vertical velocity upon impact

### 4. Maximum Speed in a Curve
- Given coefficient of friction, curve radius, and gravity, calculates the maximum speed allowed to avoid skidding (`Vmax = sqrt(mu * g * r)`).

### 5. Elastic and Inelastic Collision Calculator
- Given masses and initial velocities of two bodies, computes:
  - Final velocities after a 1D elastic collision
  - Final velocity after a completely inelastic collision (bodies stick together)

### 6. Circle Properties Calculator
- Computes radius and center coordinates from the coefficients of the circle equation.

### 7. Ellipse Properties Calculator
- Calculates the foci, eccentricity, and focal distance (`c`) based on the ellipse’s semi-major and semi-minor axes.

### 8. Hyperbola Properties Calculator
- Calculates the foci, eccentricity, focal distance (`c`), and equations of the asymptotes.

---

## Project Structure

- **index.html**: Contains the structure and forms for all inputs.
- **style.css**: Contains styles to make the interface clear and visually appealing.
- **script.js**: Contains all calculation functions and DOM manipulation to dynamically display results.

---

## Technical Details and Notes

- All input values are parsed to floats or integers to prevent type errors.
- Functions handle invalid or impossible input gracefully with clear messages.
- Results are rounded to two decimal places for readability.
- Uses DOM manipulation (`document.getElementById(...).innerHTML`) to update results in real time.
- Angle conversion from degrees to radians is properly done for trigonometric calculations.
- Standard physical and mathematical formulas are used (e.g., quadratic formula, uniformly accelerated motion, friction limits, momentum conservation).
- Variables are mostly locally scoped to avoid conflicts and ensure code clarity.

---

## How to Use

1. Clone or download this repository.
2. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari).
3. Navigate to the relevant section (equations, motion, curve, collisions, circle, ellipse, hyperbola).
4. Enter the required values in the input forms.
5. Press the calculate button or observe real-time updated results.
6. Results will display below each form.

---

## Future Improvements

- More robust input validation with specific error messages.
- Enhanced UI with visual feedback and animations.
- Interactive graphs to visualize parabolas, projectile motion, and trajectories.
- Multi-language support.
- Modularization of JavaScript using ES6 modules.
- Detailed error handling.
- Export results as PDF or CSV.
- Add interactive simulations or animations.

---

## License and Credits

This project was created as an educational tool to support the study of physical laws and mathematical curves.

The code is released under the MIT License (or specify your license here), free to use and modify.

---

If you have any questions or want to contribute, feel free to open an issue or submit a pull request!

(https://user-images.githubusercontent.com/94646702/214670336-7476c95c-5261-4ed9-9ee1-69f5691e911f.png)
