# Restaurant Manager 🍽️

A modern, feature-rich restaurant management system built with **Angular 20** using **standalone components** and **zoneless architecture**. This application provides a comprehensive solution for managing restaurant records with an intuitive user interface and robust functionality.

![Angular](https://img.shields.io/badge/Angular-20.1.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-purple?style=flat-square&logo=bootstrap)

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Login/Registration System**: Complete user authentication with form validation
- **Session Management**: Persistent login state using local storage
- **Route Protection**: Protected routes ensuring only authenticated users can access dashboard

### 🏪 Restaurant Management
- **Add New Restaurants**: Comprehensive form with validation for restaurant details
- **View Restaurant Details**: Detailed view of restaurant information
- **Edit Restaurant Information**: Update existing restaurant data
- **Delete Restaurants**: Remove restaurants with confirmation dialogs
- **Search & Filter**: Advanced search functionality across all restaurant fields

### 🎨 Modern User Interface
- **Responsive Design**: Mobile-first design using Bootstrap 5
- **Dark/Light Theme Ready**: Modern UI components with professional styling
- **Interactive Elements**: Smooth animations and transitions
- **Icon Integration**: Bootstrap Icons for enhanced visual appeal

### ⚡ Technical Excellence
- **Zoneless Architecture**: Built with Angular 20's experimental zoneless change detection
- **Standalone Components**: Modern Angular architecture without NgModules
- **Reactive Forms**: Advanced form handling with validation
- **Component-Based Architecture**: Modular and maintainable codebase
- **TypeScript**: Full type safety and modern JavaScript features

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v20.19.0 or higher)
- **npm** (v10.0.0 or higher)
- **Angular CLI** (v20.1.5 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khaledrokaya/Restaurant_Manager.git
   cd Restaurant_Manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production
```bash
npm run build
```

## 📱 Application Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/                 # About page component
│   │   ├── add-restaurant/        # Add restaurant form
│   │   ├── contact/               # Contact page
│   │   ├── dashboard/             # Main dashboard
│   │   ├── edit-restaurant/       # Edit restaurant form
│   │   ├── footer/                # Footer component
│   │   ├── landing/               # Landing page
│   │   ├── login/                 # Login component
│   │   ├── navbar/                # Navigation component
│   │   ├── not-found/             # 404 page
│   │   ├── restaurant-details/    # Restaurant details view
│   │   └── signup/                # Registration component
│   ├── shared/
│   │   ├── auth.service.ts        # Authentication service
│   │   └── data.service.ts        # Data management service
│   ├── app-routing.module.ts      # Route configurations
│   ├── app.component.*            # Root component
│   └── main.ts                    # Application bootstrap
├── assets/
│   └── data.json                  # Sample data
└── styles.css                     # Global styles
```

## 🎯 Usage Guide

### Getting Started
1. **Registration**: Create a new account using the signup form
2. **Login**: Use your credentials to access the dashboard
3. **Dashboard**: View all restaurants in a card-based layout

### Managing Restaurants
- **Add Restaurant**: Click "Add Restaurant" and fill in the required details
- **Search**: Use the search bar to find restaurants by name, email, address, or services
- **View Details**: Click on any restaurant card to see detailed information
- **Edit**: Use the edit button to modify restaurant information
- **Delete**: Remove restaurants with confirmation prompts

### Default Credentials
For testing purposes, you can use these sample accounts:
- **Email**: `alice@example.com` **Password**: `alice123`
- **Email**: `bob@example.com` **Password**: `bob123`
- **Email**: `carol@example.com` **Password**: `carol123`

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 20.1.0 | Frontend framework |
| **TypeScript** | 5.8.2 | Language |
| **Bootstrap** | 5.1.3 | CSS framework |
| **RxJS** | 7.8.0 | Reactive programming |
| **Angular Router** | 20.1.0 | Navigation |
| **Angular Forms** | 20.1.0 | Form handling |

## 🏗️ Architecture Highlights

### Zoneless Angular
This project uses Angular 20's experimental zoneless change detection for improved performance:
```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule)
  ]
})
```

### Standalone Components
All components are built as standalone, eliminating the need for NgModules:
```typescript
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html'
})
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Process
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow Angular style guide
- Use TypeScript strict mode
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Khaled Mostafa**
- 🌐 Portfolio: [khaled-mostafa.me](https://www.khaled-mostafa.me/)
- 💼 LinkedIn: [khaled-mostafa-jr](https://www.linkedin.com/in/khaled-mostafa-jr)
- 🐱 GitHub: [@khaledrokaya](https://github.com/khaledrokaya)
- 📂 Project: [Restaurant Manager](https://github.com/khaledrokaya/Restaurant_Manager)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Bootstrap team for the responsive CSS framework
- Open source community for inspiration and resources

## 📞 Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

---

**Built with ❤️ using Angular 20 and modern web technologies**
