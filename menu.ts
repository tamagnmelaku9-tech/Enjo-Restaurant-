/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, AddonOption } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // [ቁርስና ፎርፌዎች (Breakfast)]
  {
    id: 1,
    name: 'ኖርማል ፍርፍር',
    englishName: 'Normal Firfir',
    price: 100,
    category: 'breakfast',
    description: 'የተቀመመ የሽንኩርትና በርበሬ ኩሊት በጣፋጭ እንጀራ የተፈተፈተ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 2,
    name: 'ስፔሻል ፍርፍር',
    englishName: 'Special Firfir',
    price: 170,
    category: 'breakfast',
    description: 'ቅቤና መዓዛ ባላቸው ቅመሞች የደመቀ ልዩ ፍርፍር',
    popular: true,
    estimatedPrepTime: 30
  },
  {
    id: 3,
    name: 'እንቁላል ፍርፍር',
    englishName: 'Egg Firfir',
    price: 150,
    category: 'breakfast',
    description: 'በቅመም የታሸ እንቁላል ከጣፋጭ ፍርፍር ጋር የተቀላቀለ',
    popular: true,
    estimatedPrepTime: 30
  },
  {
    id: 4,
    name: 'እንቁላል ስልስ',
    englishName: 'Egg Sils',
    price: 160,
    category: 'breakfast',
    description: 'በሽንኩርትና በቲማቲም ቁሌት የተጠበሰ እንቁላል ስልስ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 5,
    name: 'በየአይነት',
    englishName: 'Beyaynetu (Veggie Combo)',
    price: 140,
    category: 'breakfast',
    description: 'የተለያዩ የአትክልትና የጥራጥሬ ወጦች ድብልቅ በባህላዊ እንጀራ',
    popular: true,
    estimatedPrepTime: 30
  },
  {
    id: 6,
    name: 'ፖስታ በስጋ',
    englishName: 'Posta be Siga (Injera Roll with Meat)',
    price: 130,
    category: 'breakfast',
    description: 'በእንጀራ የተጠቀለለ ጣፋጭ የበሬ ስጋ በቅመማ ቅመም',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 7,
    name: 'ፖስታ በአትክልት',
    englishName: 'Posta be Atkilt (Injera Roll with Veggies)',
    price: 130,
    category: 'breakfast',
    description: 'በእንጀራ ጥቅልል ውስጥ ያሉ ጣፋጭ አልጫና ቀይ አትክልቶች',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 8,
    name: 'ፖስታ በእንቁላል',
    englishName: 'Posta be Enkulal (Injera Roll with Egg)',
    price: 160,
    category: 'breakfast',
    description: 'የተጠበሰ እንቁላል በእንጀራ ጥቅልል ውስጥ በቅመም የታሸ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 9,
    name: 'ኖርማል ምስር',
    englishName: 'Normal Misir Wat',
    price: 130,
    category: 'breakfast',
    description: 'በባህላዊ መንገድ በጥሩ በርበሬ የተሰራ የምስር ወጥ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 10,
    name: 'ስፔሻል ምስር',
    englishName: 'Special Misir Wat',
    price: 150,
    category: 'breakfast',
    description: 'በቅቤና በልዩ ቅመማ ቅመም የተንቆጠቆጠ የምስር ወጥ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 11,
    name: 'ኖርማል አትክልት',
    englishName: 'Normal Atkilt (Veggie Mix)',
    price: 130,
    category: 'breakfast',
    description: 'ካሮት፣ ድንችና ጎመን በጥራት የተሰሩ አልጫ ወጥ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 12,
    name: 'ስፔሻል አትክልት',
    englishName: 'Special Atkilt (Special Veggie Mix)',
    price: 170,
    category: 'breakfast',
    description: 'ተጨማሪ ቅመምና ጣዕም ያላቸው ልዩ የአትክልት አይነቶች',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 13,
    name: 'ሽሮ',
    englishName: 'Shiro Wat',
    price: 130,
    category: 'breakfast',
    description: 'የተመረጠ የሽንብራ ዱቄት በሽንኩርትና ነጭ ሽንኩርት የታሸ',
    popular: true,
    estimatedPrepTime: 30
  },
  {
    id: 14,
    name: 'ተጋቢኖ',
    englishName: 'Tegabino Shiro',
    price: 160,
    category: 'breakfast',
    description: 'በትኩስ የሸክላ ድስት የሚፈስ ግልብጥብጥ ያለ Shiro',
    popular: true,
    estimatedPrepTime: 30
  },

  // [ስጋ ነክ (Meat Dishes)]
  {
    id: 15,
    name: 'ተጋዳይ',
    englishName: 'Tegaday (Sizzling Ribs/Tibs)',
    price: 250,
    category: 'meat',
    description: 'እንፋሎት የሚወጣው ትኩስ የበሬ ስጋ በባህላዊ መጥበሻ በጥብስ ቅመም',
    popular: true,
    estimatedPrepTime: 35
  },
  {
    id: 16,
    name: 'ስጋ ፍርፍር',
    englishName: 'Siga Firfir (Beef Firfir)',
    price: 230,
    category: 'meat',
    description: 'ለስላሳ የበሬ ስጋ ቁርጥራጮች ከቅመም ፍርፍር ጋር የበሰለ',
    popular: true,
    estimatedPrepTime: 30
  },
  {
    id: 17,
    name: 'ቀይ ወጥ',
    englishName: 'Key Wat (Traditional Beef Stew)',
    price: 300,
    category: 'meat',
    description: 'በበርበሬና ሽንኩርት ኩሊት በስሱ የበሰለ ለስላሳ የበሬ ቀይ ወጥ',
    popular: false,
    estimatedPrepTime: 35
  },
  {
    id: 18,
    name: 'ጎድን በስጋ',
    englishName: 'Godin be Siga (Ribs with Meat)',
    price: 230,
    category: 'meat',
    description: 'ጣፋጭ የበሬ ጎድን ስጋ በጥንቃቄ የተጠበሰ በቃሪያና ሽንኩርት',
    popular: false,
    estimatedPrepTime: 35
  },
  {
    id: 19,
    name: 'አትክልት በስጋ',
    englishName: 'Atkilt be Siga (Veggies with Beef)',
    price: 230,
    category: 'meat',
    description: 'ለስላሳ የበሬ ስጋ ከአልጫ አትክልት ጋር የተቀላቀለ ጣፋጭ ምግብ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 20,
    name: 'እንቁላል በስጋ',
    englishName: 'Enkulal be Siga (Scrambled Eggs with Beef)',
    price: 250,
    category: 'meat',
    description: 'የተከተፈ የበሬ ስጋ በጥቅልል እንቁላል ተጠብሶ የቀረበ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 21,
    name: 'ጥብስ',
    englishName: 'Tibs (Sautéed Beef / Tibs)',
    price: 350,
    category: 'meat',
    description: 'የተመረጠ የበሬ ስጋ በከፍተኛ ሙቀት በሽንኩርትና ቃሪያ የተጠበሰ',
    popular: true,
    estimatedPrepTime: 35
  },
  {
    id: 22,
    name: 'በሃና ሸሮ',
    englishName: 'Bahana Shiro',
    price: 230,
    category: 'meat',
    description: 'ልዩ የሸክላ ሽሮ ከተቆረጠ ለስላሳ የበሬ ስጋ ጋር የተቀላቀለ',
    popular: true,
    estimatedPrepTime: 30
  },
  {
    id: 23,
    name: 'ምስር በስጋ',
    englishName: 'Misir be Siga (Lentils with Beef)',
    price: 250,
    category: 'meat',
    description: 'ጣፋጭ ምስር ወጥ ከተከተፈ የበሬ ስጋ ጋር በጥንቃቄ የበሰለ',
    popular: false,
    estimatedPrepTime: 30
  },
  {
    id: 24,
    name: 'ድንች በስጋ',
    englishName: 'Dinch be Siga (Potato & Beef Stew)',
    price: 250,
    category: 'meat',
    description: 'የድንች ወጥ ከተመረጠ የበሬ ስጋ ጋር የተዋሃደ ጣፋጭ ምሳ',
    popular: false,
    estimatedPrepTime: 30
  }
];

export const INJERA_OPTIONS = [
  { id: 'standard', name: 'ኖርማል እንጀራ (Standard)', price: 0 },
  { id: 'teff', name: 'የጤፍ እንጀራ (Teff Injera)', price: 15 },
  { id: 'hibist', name: 'ህብስት (Traditional Bread)', price: 10 }
];

export const SPICY_LEVELS = [
  { id: 'mild', name: 'አልጫ / የማይለበልብ (Mild)', price: 0 },
  { id: 'medium', name: 'መካከለኛ በርበሬ (Medium)', price: 0 },
  { id: 'hot', name: 'በደንብ የተቃጠለ (Extra Spicy)', price: 0 },
  { id: 'mitmita', name: 'በሚጥሚጣ የታጀበ (Mitmita Side)', price: 5 }
];

export const ADDONS: AddonOption[] = [
  { id: 'butter', name: 'ንጥር ቅቤ (Spiced Butter)', price: 30 },
  { id: 'egg', name: 'ተጨማሪ እንቁላል (Extra Egg)', price: 25 },
  { id: 'injera', name: 'ተጨማሪ እንጀራ (Extra Injera)', price: 15 },
  { id: 'cheese', name: 'አይብ (Traditional Cottage Cheese)', price: 20 }
];

export const BUSINESS_INFO = {
  name: 'ኢንጆ ምግብ ቤት',
  englishName: 'Enjo Cafe & Restaurant',
  address: 'Hawassa, አላሙዲ መውጫ መንገድ',
  contact1: '0993726244',
  contact2: '0916636868',
  hours: {
    start: '07:00', // 7:00 AM
    end: '22:00'   // 10:00 PM
  },
  prepTimeMin: 30,
  taxRate: 0.15, // 15% VAT
  footerNote: 'እኛን መርጠው ስለመጡ እናመሰግናለን',
  bankDetails: {
    bankName: 'Commercial Bank of Ethiopia (CBE)',
    branch: 'CBE Luda Branch',
    accountNumber: '100077891498',
    accountHolder: 'Melaku Tamagn'
  }
};
