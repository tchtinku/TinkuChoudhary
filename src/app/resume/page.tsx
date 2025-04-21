'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ArrowDownTrayIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function Resume() {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/12LJVWIPvByqP0xJpCYTR9zrQv8pkN-iD/view?usp=share_link', '_blank');
  };

  const books = [
    { title: "Working Backwards", author: "Colin Bryar & Bill Carr", status: "Completed", link: "https://www.amazon.com/Working-Backwards-Inside-Story-Amazon/dp/1250267595" },
    { title: "AI Superpowers", author: "Kai-Fu Lee", status: "Completed", link: "https://www.amazon.com/AI-Superpowers-China-Silicon-Valley/dp/132854639X" },
    { title: "Real World AI", author: "Azeem Azhar", status: "Completed", link: "https://www.amazon.com/Exponential-Age-Radical-Technology-Transforming/dp/1541674098" },
    { title: "Alchemy", author: "Rory Sutherland", status: "Completed", link: "https://www.amazon.com/Alchemy-Power-Ideas-Dont-Make/dp/006280283X" },
    { title: "Read Write Own", author: "Chris Dixon", status: "Completed", link: "https://www.amazon.com/Read-Write-Own-Building-Internet/dp/0593731332" },
    { title: "High Output Management", author: "Andrew S. Grove", status: "Completed", link: "https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884" },
    { title: "Outliers", author: "Malcolm Gladwell", status: "Completed", link: "https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017922" },
    { title: "The Hard Things about Hard Things", author: "Ben Horowitz", status: "Completed", link: "https://www.amazon.com/Hard-Thing-About-Hard-Things/dp/0062273205" },
    { title: "Autobiography of Yogi", author: "Paramahansa Yogananda", status: "Completed", link: "https://www.amazon.com/Autobiography-Yogi-Paramahansa-Yogananda/dp/1565892127" },
    { title: "Deep Learning for Vision Systems", author: "Mohamed Elgendy", status: "Completed", link: "https://www.amazon.com/Deep-Learning-Vision-Systems-Applications/dp/1617296198" },
    { title: "What is ChatGPT doing", author: "Stephen Wolfram", status: "Completed", link: "https://www.amazon.com/What-Is-ChatGPT-Doing/dp/1579550876" },
    { title: "Hands on Large Language Models", author: "Various Authors", status: "Completed", link: "https://www.amazon.com/Hands-Large-Language-Models-Practical/dp/1804610313" },
    { title: "Building LLMs for Production", author: "Various Authors", status: "Completed", link: "https://www.amazon.com/Building-Large-Language-Models-Production/dp/1804610313" },
    { title: "Becoming Steve Jobs", author: "Brent Schlender & Rick Tetzeli", status: "Completed", link: "https://www.amazon.com/Becoming-Steve-Jobs-Evolution-Visionary/dp/038534742X" },
    { title: "Be 2.0", author: "Jim Collins", status: "Completed", link: "https://www.amazon.com/BE-2-0-Beyond-Entrepreneurship/dp/0593082364" },
    { title: "Leading an Inspired Life", author: "Jim Rohn", status: "Completed", link: "https://www.amazon.com/Leading-Inspired-Life-Jim-Rohn/dp/1887219120" },
    { title: "Coco Chanel", author: "Justine Picardie", status: "Completed", link: "https://www.amazon.com/Coco-Chanel-Legend-Life/dp/0061685668" },
    { title: "Build a Large Language Model", author: "Various Authors", status: "Completed", link: "https://www.amazon.com/Building-Large-Language-Models-Practical/dp/1804610313" },
    { title: "Warren Buffet", author: "Roger Lowenstein", status: "Completed", link: "https://www.amazon.com/Buffett-Making-American-Capitalist/dp/0812979273" },
    { title: "Last Man Standing", author: "James D. Scurlock", status: "Completed", link: "https://www.amazon.com/Last-Man-Standing-Madoff-Century/dp/0061650786" },
    { title: "The Power of Less", author: "Leo Babauta", status: "Completed", link: "https://www.amazon.com/Power-Less-Essential-Productivity-Simplicity/dp/1401309704" },
    { title: "Strength Finder 2.0", author: "Tom Rath", status: "Completed", link: "https://www.amazon.com/StrengthsFinder-2-0-Tom-Rath/dp/159562015X" },
    { title: "Purple Cow", author: "Seth Godin", status: "Completed", link: "https://www.amazon.com/Purple-Cow-Transform-Business-Being/dp/014101640X" },
    { title: "The Dance Cure", author: "Peter Lovatt", status: "Completed", link: "https://www.amazon.com/Dance-Cure-Science-Movement-Healing/dp/1781258182" },
    { title: "Getting Things Done", author: "David Allen", status: "Completed", link: "https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0142000280" },
    { title: "Linchpin", author: "Seth Godin", status: "Completed", link: "https://www.amazon.com/Linchpin-Are-Indispensable-Seth-Godin/dp/1591843162" },
    { title: "SuperCommunicators", author: "Charles Duhigg", status: "Completed", link: "https://www.amazon.com/Supercommunicators-Conversation-Transform-Connect-Change/dp/0593442144" },
    { title: "The Dip", author: "Seth Godin", status: "Completed", link: "https://www.amazon.com/Dip-Little-Book-Teaches-Stick/dp/1591841666" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header Section */}
          <section className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resume & Reading List
            </h1>
            <p className="text-xl text-gray-600">
              Download my resume and explore my reading journey
            </p>
          </section>

          {/* Resume Download Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-8 shadow-lg text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Download My Resume
            </h2>
            <p className="text-gray-700 mb-8">
              Get a detailed overview of my experience, skills, and achievements in data engineering
              and Generative AI development.
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </motion.section>

          {/* Books Reading Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Books I've Read
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-2">
                    <BookOpenIcon className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <a 
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {book.title}
                      </a>
                      <p className="text-sm text-gray-600">{book.author}</p>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {book.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 