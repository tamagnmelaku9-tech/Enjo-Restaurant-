/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: number;
  name: string;
  englishName: string;
  price: number;
  category: 'breakfast' | 'meat';
  description?: string;
  popular?: boolean;
  estimatedPrepTime: number; // in minutes
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  id: string; // Unique string identifying this customized item in the cart
  menuItem: MenuItem;
  quantity: number;
  injeraType: string;
  spicyLevel: string;
  selectedAddons: AddonOption[];
  specialInstructions?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'customer' | 'merchant' | 'system';
  text: string;
  image?: string; // Base64 Data URL or mock image path of receipt screenshot
  createdAt: string; // e.g. "11:32 AM"
}

export interface Order {
  id: string; // e.g., ENJO-7892
  customerName: string;
  customerPhone: string;
  pickupTime: string; // e.g., "7:30 PM"
  items: CartItem[];
  subtotal: number;
  vat: number;
  total: number;
  paymentMethod: 'telebirr' | 'chapa' | 'cbe_birr';
  paymentStatus: 'pending' | 'paid';
  orderStatus: 'pending' | 'preparing' | 'ready' | 'completed';
  createdAt: string;
  isFlagged?: boolean;
  timestamp?: number;
  bankDetails: {
    bankName: string;
    branch: string;
    accountNumber: string;
    accountHolder: string;
  };
  chatMessages?: ChatMessage[];
}
