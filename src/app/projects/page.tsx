'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function Projects() {
  const handleExplore = () => {
    window.open('https://lnkd.in/gUqWFvAh', '_blank');
  };

  const handleJoinHub = () => {
    window.open('https://lnkd.in/gTppFb8H', '_blank');
  };

  const handleShareIdea = () => {
    // Open the default email client with the recipient pre-filled
    window.location.href = 'mailto:tchtinku@gmail.com?subject=Project Idea for GenAILearnersHub';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🛠️ Projects Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Where Innovation Meets Execution
            </p>
          </section>

          {/* Journey Section */}
          <section className="prose dark:prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Builder's Journey
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                For 500 days, I immersed myself in Generative AI - experimenting, failing, and creating solutions 
                that bridge theory and practice. These projects represent my evolution from curious learner to 
                confident builder.
              </p>
            </motion.div>
          </section>

          {/* Featured Projects */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                The 500-Day Milestone
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="flex items-start">
                  <span className="mr-2">🎉</span>
                  <span>Day 496-500: Reflecting on my GenAI Odyssey - the breakthroughs, the bugs, and everything in between.</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>Next Chapter: Launched GenAILearnersHub - an open playground for:</span>
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Beginners to cut their teeth on starter projects</li>
                  <li>Builders to collaborate on agent challenges</li>
                  <li>Researchers to push RAG boundaries</li>
                </ul>
                <p className="italic mt-4">
                  "The best way to learn is to build together"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🎯 Let's Build Together
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>Whether you want to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">⚡</span>
                    <span>Tinker with any project's code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💡</span>
                    <span>Suggest improvements or new features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🌟</span>
                    <span>Just get inspired</span>
                  </li>
                </ul>
                <p className="italic mt-4">
                  "The most exciting projects always start with 'What if...?'"
                </p>
              </div>
            </motion.div>
          </section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleExplore}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore
              </button>
              <button 
                onClick={handleJoinHub}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Join the Hub
              </button>
              <button 
                onClick={handleShareIdea}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Share Your Idea
              </button>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 