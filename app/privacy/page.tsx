import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                    This Privacy Policy explains how we collect, use, and protect your personal
                    information when you use our URL cleaning service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>URLs you submit for cleaning</li>
                    <li>Usage data and analytics</li>
                    <li>Device information</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our URL cleaning service</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Maintain service security and prevent abuse</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="mb-4">
                    We implement appropriate security measures to protect your information. However,
                    no method of transmission over the internet is 100% secure.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request correction of your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at: [Your
                    Contact Information]
                </p>
            </section>

            <footer className="text-sm text-gray-600">
                <p>Last updated: January 26, 2025</p>
            </footer>
        </div>
    );
}
