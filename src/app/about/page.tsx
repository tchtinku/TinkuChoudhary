'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Section */}
          <section className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Data Engineer & Problem Solver
            </p>
          </section>

          {/* Introduction */}
          <section className="prose dark:prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Hi, I'm Tinku
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm a Data Engineer who loves turning complex problems into simple, scalable solutions.
                My approach to data engineering is rooted in the belief that clean pipelines are more valuable
                than clever code.
              </p>
            </motion.div>
          </section>

          {/* Philosophy & Values */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Philosophy
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">🛠️</span>
                  <span>Enjoy building software that makes data useful</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Believe clean pipelines {'>'} clever code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌱</span>
                  <span>Constant learner (currently exploring GenAI/LLMs)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Beyond Data
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">☕</span>
                  <span>When not optimizing queries, you'll find me brewing coffee or hiking trails</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💡</span>
                  <span className="italic">
                    "Good data systems should work quietly in the background - like plumbing, but with fewer leaks."
                  </span>
                </li>
              </ul>
            </motion.div>
          </section>
        </motion.div>
      </main>
    </div>
  );
} 