# Financial Engineering 2

A comprehensive financial engineering web application with authentication, dashboard, and analysis tools.

## 🚀 Features

- **User Authentication**: Secure sign-in/sign-up with Supabase
- **Dashboard**: Modern dashboard interface for financial analysis
- **Navigation**: Responsive navigation system
- **Financial Tools**: Placeholder for financial analysis, risk management, and market data tools

## 📁 Project Structure

```
Financial_Engineering_2/
├── app/                    # Application modules
│   ├── dashboard/         # Dashboard functionality
│   ├── budget/           # Budget management tools
│   └── forecast/         # Forecasting tools
├── website/              # Main website components
│   ├── dashboard/        # Dashboard web interface
│   ├── signin/          # Authentication system
│   ├── nav/             # Navigation components
│   ├── blogs/           # Blog section
│   └── index/           # Homepage
└── README.md            # Project documentation
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Authentication**: Supabase Auth
- **Styling**: Custom CSS with Google Fonts (Roboto)
- **Server**: Python HTTP Server

## 🚀 Getting Started

### Prerequisites

- Python 3.x
- Web browser
- Supabase account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/stoiccapital/financial_engineering_2.git
   cd financial_engineering_2
   ```

2. **Configure Supabase**
   - Update `website/signin/config.js` with your Supabase credentials
   - Replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY` with your actual values

3. **Start the server**
   ```bash
   python -m http.server 8000
   ```

4. **Access the application**
   - Open your browser and go to `http://localhost:8000`
   - Navigate to `http://localhost:8000/signin/signin.html` to sign in
   - After authentication, you'll be redirected to the dashboard

## 📱 Usage

### Authentication Flow

1. **Sign In**: Visit `/signin/signin.html`
2. **Enter Credentials**: Use your Supabase account credentials
3. **Dashboard Access**: After successful authentication, you'll be redirected to `/dashboard/dashboard.html`

### Dashboard Features

- **Financial Analysis**: Create and manage financial models
- **Risk Management**: Monitor portfolio risk metrics
- **Market Data**: Access real-time market data and analytics
- **Reports**: Generate financial reports and insights

## 🔧 Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Update `website/signin/config.js`:

```javascript
const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
}
```

## 📄 File Structure Details

### Core Components

- **`website/signin/`**: Authentication system with Supabase integration
- **`website/dashboard/`**: Main dashboard interface with user management
- **`website/nav/`**: Navigation components used across the application
- **`app/dashboard/`**: Dashboard functionality and business logic

### Key Files

- `website/signin/signin.html` - Sign-in page
- `website/signin/signin.js` - Authentication logic
- `website/dashboard/dashboard.html` - Dashboard interface
- `website/dashboard/dashboard.js` - Dashboard functionality
- `website/nav/nav.css` - Navigation styling
- `website/nav/nav.js` - Navigation logic

## 🔒 Security

- **Authentication**: Secure user authentication via Supabase
- **Session Management**: Automatic session validation
- **Redirect Protection**: Unauthenticated users are redirected to sign-in

## 🎨 Design

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with hover effects
- **Typography**: Google Fonts (Roboto) for consistent typography
- **Color Scheme**: Professional dark theme with white cards

## 🚧 Development Status

- ✅ **Authentication System**: Complete with Supabase integration
- ✅ **Dashboard Interface**: Complete with user information display
- ✅ **Navigation System**: Complete with responsive design
- 🚧 **Financial Tools**: Placeholder interfaces ready for implementation
- 🚧 **Data Integration**: Ready for real financial data integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Stoic Capital** - *Initial work* - [stoiccapital](https://github.com/stoiccapital)

## 🙏 Acknowledgments

- Supabase for authentication services
- Google Fonts for typography
- Financial engineering community for inspiration 