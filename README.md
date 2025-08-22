# Cyber Safety India 🛡️

A comprehensive cyber safety platform designed specifically for Indian users to raise awareness, educate, and empower them to recognize, prevent, and respond to cyber threats.

## 🌟 Features

### Core Functionalities
- **Interactive Learning Modules** - Tailored courses for different demographics
- **Threat Database** - Comprehensive information about cyber threats
- **Safety Checklists** - Interactive checklists to assess cyber safety
- **Emergency Contacts** - Quick access to emergency services and support
- **Demographic-Based Content** - Personalized content for students, professionals, homemakers, rural users, and senior citizens

### Key Pages
- **Homepage** - Overview and demographic selection
- **Learning Center** (`/learn`) - Interactive modules with quizzes
- **Threats Database** (`/threats`) - Comprehensive threat information
- **Safety Checklists** (`/checklist`) - Interactive safety assessments
- **Emergency Contacts** (`/emergency`) - Quick access to help

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cyber-safety-india
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **UI Components**: Headless UI

## 📁 Project Structure

```
cyber-safety-india/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── learn/             # Learning modules
│   ├── threats/           # Threats database
│   ├── checklist/         # Safety checklists
│   └── emergency/         # Emergency contacts
├── data/                  # Data files
│   ├── threats.ts         # Threat definitions
│   ├── learning-modules.ts # Learning content
│   ├── emergency-contacts.ts # Contact information
│   └── safety-checklists.ts # Checklist definitions
├── types/                 # TypeScript definitions
│   └── index.ts           # Type definitions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🎯 Target Demographics

### Students
- Social media safety
- Online gaming security
- Academic integrity protection

### Professionals
- Work email security
- Data protection
- VPN usage guidelines

### Homemakers
- Online shopping safety
- Banking security
- Family protection measures

### Rural Users
- Mobile banking safety
- Government services access
- Local support resources

### Senior Citizens
- Phone call safety
- Banking security
- Family communication tools

## 🛡️ Threat Categories Covered

- **Phishing** - Email and SMS scams
- **UPI Scams** - Payment fraud prevention
- **Fake Calls** - Phone-based scams
- **Identity Theft** - Personal information protection
- **Social Media Scams** - Platform-specific threats
- **Online Shopping Fraud** - E-commerce safety

## 📊 Data Structure

### Threat Information
Each threat includes:
- Detailed description
- Risk level assessment
- Prevention tips
- What to do if affected
- Real-life case studies
- Affected demographics

### Learning Modules
Each module contains:
- Interactive content
- Quiz questions
- Duration estimates
- Difficulty levels
- Target demographics

### Safety Checklists
Each checklist includes:
- Priority-based items
- Progress tracking
- Demographic targeting
- Category classification

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades for trust and security
- **Danger**: Red for high-risk threats
- **Warning**: Orange for medium-risk items
- **Success**: Green for completed tasks
- **Info**: Purple for informational content

### Components
- Responsive cards with hover effects
- Interactive buttons with state changes
- Progress bars for checklist completion
- Animated transitions using Framer Motion
- Accessible form elements

## 🔧 Configuration

### Tailwind CSS
Custom color palette and animations defined in `tailwind.config.js`

### Next.js
App Router enabled with image optimization for external domains

### TypeScript
Strict type checking with comprehensive interface definitions

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🚨 Emergency Features

### Quick Access Numbers
- National Cyber Crime Portal: 1930
- Cyber Crime Helpline: 155260
- Women Helpline: 1091
- Child Helpline: 1098

### Emergency Procedures
- Step-by-step guidance for victims
- Immediate action items
- Contact information for different scenarios

## 🔒 Security Considerations

- No sensitive data collection
- Client-side only functionality
- Secure external links
- Privacy-focused design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Indian Cyber Crime Portal for emergency contact information
- Cybersecurity experts for threat definitions
- Open source community for tools and libraries

## 📞 Support

For support or questions:
- Create an issue in the repository
- Contact the development team
- Check the FAQ section

---

**Stay Safe Online! 🛡️**

*Empowering Indians with comprehensive cyber safety education and tools.*
