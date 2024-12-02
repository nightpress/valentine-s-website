# Valentine Interactive App ❤️

A playful and engaging Valentine-themed web app built with **React**! It invites users to answer a simple question: "Do you want to be my Valentine?" Beware of the mischievous "No" button that moves around as you try to click it!

## Features
- **Interactive Buttons**: A "Yes" button that grows in size and a "No" button that changes position dynamically.
- **Humorous Texts**: Displayed phrases change as the user interacts with the "No" button.
- **Sound Effects**: A "caching" sound plays when the user reaches a special stage.
- **Dynamic Images**: Swap between a "happy duck" and "angry duck" based on responses.

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/valentine-interactive-app.git
   cd valentine-interactive-app
2. Install dependencies:
   ```bash
   npm install
3. Run the development server:
   ```bash
   npm start
The app will open in your default web browser, typically at http://localhost:3000.


## File Structure

- **`App.tsx`**: Contains the main logic and interactive elements of the app.
- **`App.css`**: Defines the styles for the app, including the container and buttons.
- **`main.tsx`**: The entry point for rendering the app in the DOM.
- **`index.css`**: Global styles for the project.
- **`src/caching.mp3`**: The sound effect played during specific interactions.
- **`src/cute-duck.gif` & `src/xVLTATh152VV.gif`**: Images for happy and angry duck visuals.

## Customization

- **Phrases**: Modify the `phrases` array in `App.tsx` to change the texts displayed when clicking "No."
- **Images**: Replace the `.gif` files in the `src` folder with your own themed images.
- **Sound Effect**: Replace `caching.mp3` in the `src` folder to use a custom sound effect.
- **Styling**: Adjust the styles in `App.css` to change button sizes, colors, or layouts.

## Future Enhancements

- Add animations to buttons when they are hovered or clicked.
- Introduce additional sound effects for various interactions.
- Include more phrases and stages to enhance engagement.
- Add a customization menu for users to change themes or visuals directly in the app.

## Technologies Used

- **React**: A library for building the user interface.
- **HTML & CSS**: For structuring and styling the app.
- **JavaScript/TypeScript**: For interactivity and application logic.


