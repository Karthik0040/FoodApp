🍴 Tasty Kinara

A modern food delivery app built with React Native and powered by Supabase.
Tasty Kinara allows users to explore delicious seafood dishes, add them to the cart, place orders, and make secure payments through Razorpay.

🚀 Features

📱 Cross-platform app built with React Native

🔑 Google OAuth authentication with Supabase

🛒 Cart management – add, update, and remove items

💳 Payments using Razorpay integration

📦 Order management with Supabase database & RLS policies

🖼️ Product images served from Supabase Storage

🎨 Tailwind CSS styling for consistent UI

📋 Terms & Conditions / Privacy Policy acceptance on onboarding

📍 Contact page with call, email, and location options

🧩 Tech Stack

Frontend: React Native, Tailwind CSS

Backend & Auth: Supabase (Postgres, RLS, Storage, Auth)

Payments: Razorpay

Navigation: React Navigation (Drawer & Stack navigators)

📸 Screenshots

(Add your app screenshots here, e.g., Home screen, Cart screen, Checkout page)

⚙️ Installation

Clone the repo:

git clone https://github.com/your-username/tasty-kinara.git
cd tasty-kinara


Install dependencies:

npm install
# or
yarn install


Setup environment variables (.env):

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret


Run the app:

npm run start

📂 Project Structure
tasty-kinara/
│-- src/
│   │-- components/      # Reusable UI components
│   │-- context/         # CartProvider & Auth context
│   │-- navigation/      # App navigation (drawer, stack)
│   │-- screens/         # Screens (Home, Cart, Profile, Settings, Contact)
│   │-- services/        # Supabase & Razorpay setup
│   └-- styles/          # Tailwind & custom styles
│
├── .env                 # Environment variables
├── package.json
└── README.md

🔒 Database Schema (Supabase)

User → (id, name, email, image, token_id)

Product → (id, name, price, weight, image)

Order → (id, user_id, status, total_price, created_at)

Order_Item → (id, order_id, product_id, quantity)
