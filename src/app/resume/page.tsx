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
    { title: "Working Backwards", author: "Colin Bryar & Bill Carr", status: "Completed" },
    { title: "AI Superpowers", author: "Kai-Fu Lee", status: "Completed" },
    { title: "Real World AI", author: "Azeem Azhar", status: "Completed" },
    { title: "Alchemy", author: "Rory Sutherland", status: "Completed" },
    { title: "Read Write Own", author: "Chris Dixon", status: "Completed" },
    { title: "High Output Management", author: "Andrew S. Grove", status: "Completed" },
    { title: "Outliers", author: "Malcolm Gladwell", status: "Completed" },
    { title: "The Hard Things about Hard Things", author: "Ben Horowitz", status: "Completed" },
    { title: "Autobiography of Yogi", author: "Paramahansa Yogananda", status: "Completed" },
    { title: "Deep Learning for Vision Systems", author: "Mohamed Elgendy", status: "Completed" },
    { title: "What is ChatGPT doing", author: "Stephen Wolfram", status: "Completed" },
    { title: "Hands on Large Language Models", author: "Various Authors", status: "Completed" },
    { title: "Building LLMs for Production", author: "Various Authors", status: "Completed" },
    { title: "Becoming Steve Jobs", author: "Brent Schlender & Rick Tetzeli", status: "Completed" },
    { title: "Be 2.0", author: "Jim Collins", status: "Completed" },
    { title: "Leading an Inspired Life", author: "Jim Rohn", status: "Completed" },
    { title: "Coco Chanel", author: "Justine Picardie", status: "Completed" },
    { title: "Build a Large Language Model", author: "Various Authors", status: "Completed" },
    { title: "Warren Buffet", author: "Roger Lowenstein", status: "Completed" },
    { title: "Last Man Standing", author: "James D. Scurlock", status: "Completed" },
    { title: "The Power of Less", author: "Leo Babauta", status: "Completed" },
    { title: "Strength Finder 2.0", author: "Tom Rath", status: "Completed" },
    { title: "Purple Cow", author: "Seth Godin", status: "Completed" },
    { title: "The Dance Cure", author: "Peter Lovatt", status: "Completed" },
    { title: "Getting Things Done", author: "David Allen", status: "Completed" },
    { title: "Linchpin", author: "Seth Godin", status: "Completed" },
    { title: "SuperCommunicators", author: "Charles Duhigg", status: "Completed" },
    { title: "The Dip", author: "Seth Godin", status: "Completed" }
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
                      <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
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