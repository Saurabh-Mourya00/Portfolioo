# Portfolio Website

A clean, modern portfolio website built with HTML, CSS, and JavaScript, inspired by the Cursor design system. This website is designed to be easily deployed to GitHub Pages.

## Features

- Responsive design that works on all device sizes
- Clean and modern UI based on Cursor's warm minimalist design
- Smooth scrolling and interactive elements
- Contact form with basic validation
- Easy to customize with your own information
- GitHub Pages ready

## Sections

- Hero / Introduction
- About Me
- Skills
- Professional Experience
- Projects
- Contact
- Footer

## Customization

### 1. Update Personal Information

Open `index.html` and replace the placeholder text with your own information:

- Replace "Your Name" with your actual name
- Update the hero section with your tagline or title
- Modify the About section with your bio
- Update skills with your actual technologies
- Replace experience entries with your work history
- Add your actual projects
- Update contact information

### 2. Update Colors (Optional)

If you want to customize the color scheme, edit the CSS variables in `style.css` at the top of the file:

```css
:root {
  --cursor-dark: #26251e;
  --cursor-cream: #f2f1ed;
  --accent: #f54e00;
  /* ... other variables ... */
}
```

### 3. Add Your Resume

To add your actual resume PDF:
1. Place your resume PDF in this folder (e.g., `resume.pdf`)
2. Update the "Download Resume" link in the navigation to point to your file:
   ```html
   <a href="resume.pdf" class="nav-cta" download>Download Resume</a>
   ```

## Deployment to GitHub Pages

### Option 1: Using the GitHub Interface

1. Create a new repository on GitHub (or use an existing one)
2. Push this entire `resume` folder to the repository
3. Go to your repository Settings > Pages
4. Under "Source", select the branch containing your code (usually `main` or `master`)
5. Select `/ (root)` as the folder
6. Click "Save"
7. Your site will be published at `https://username.github.io/repository-name/`

### Option 2: Using Git Commands

1. Initialize a git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a repository on GitHub and add it as remote:
   ```bash
   git remote add origin https://github.com/yourusername/repository-name.git
   git push -u origin main
   ```

3. Enable GitHub Pages in your repository settings as described above

## Development

To run this locally for development:

1. Simply open `index.html` in your web browser
2. Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

## Browser Support

This website works in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

Design inspiration: Cursor design system
Fonts: System UI, Source Serif 4, Berkeley Mono
Icons: Text-based (no external icon dependencies)

## License

Feel free to use and modify this template for your personal portfolio website.