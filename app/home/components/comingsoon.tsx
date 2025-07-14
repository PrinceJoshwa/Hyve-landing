import React from 'react';
import { Bot, Briefcase, GraduationCap, Crown, Building, ArrowRight } from 'lucide-react';

const ComingSoonSection = () => {
    const features = [
        {
            icon: Bot,
            title: "AI Talent Matching",
            description: "Smart algorithms to match projects with perfect freelancer skills",
            color: "from-blue-500 to-blue-600",
            status: "Beta Testing"
        },
        {
            icon: Briefcase,
            title: "Portfolio Builder",
            description: "Showcase your work with beautiful, customizable portfolio templates",
            color: "from-purple-500 to-purple-600",
            status: "In Development"
        },
        {
            icon: GraduationCap,
            title: "Learning Hub",
            description: "Skill development courses and certifications for freelancers",
            color: "from-green-500 to-green-600",
            status: "Planning"
        },
        {
            icon: Crown,
            title: "Premium Subscriptions",
            description: "Advanced features, priority support, and exclusive opportunities",
            color: "from-[#F1AB13] to-[#FF6B35]",
            status: "Coming Soon"
        },
        {
            icon: Building,
            title: "Agency Conversion Tools",
            description: "Help freelancer teams transition into formal agencies",
            color: "from-indigo-500 to-indigo-600",
            status: "Research Phase"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F1AB13] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center bg-gradient-to-r from-[#F1AB13]/10 to-purple-500/10 border border-[#F1AB13]/20 rounded-full px-6 py-3 mb-6">
                        <span className="text-2xl mr-2">🚀</span>
                        <span className="text-lg font-semibold bg-gradient-to-r from-[#F1AB13] to-purple-600 bg-clip-text text-transparent">
                            Coming Soon
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        The Future of{' '}
                        <span className="bg-gradient-to-r from-[#F1AB13] to-purple-600 bg-clip-text text-transparent">
                            Freelancing
                        </span>{' '}
                        is Almost Here
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We're constantly innovating to make freelancing more collaborative,
                        efficient, and rewarding for everyone
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#F1AB13]/30 transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                                <span className="bg-gradient-to-r from-[#F1AB13]/10 to-purple-500/10 text-[#F1AB13] text-xs px-3 py-1 rounded-full font-semibold border border-[#F1AB13]/20">
                                    {feature.status}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F1AB13] transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            {/* Progress Indicator */}
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                <div
                                    className={`bg-gradient-to-r ${feature.color} h-2 rounded-full transition-all duration-1000`}
                                    style={{
                                        width: feature.status === 'Beta Testing' ? '90%' :
                                            feature.status === 'In Development' ? '70%' :
                                                feature.status === 'Coming Soon' ? '50%' :
                                                    feature.status === 'Planning' ? '30%' : '10%'
                                    }}
                                ></div>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#F1AB13]/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Early Access CTA */}
                <div className="bg-gradient-to-r from-[#F1AB13] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center animate-fade-in animation-delay-800">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Get Early Access to New Features
                    </h3>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Be among the first to experience cutting-edge freelancing tools.
                        Early supporters get priority access and special recognition!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://staging.hyvefreelance.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#F1AB13] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                        >
                            Join Early Access List
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="https://staging.hyvefreelance.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#F1AB13] px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            Follow Our Progress
                        </a>
                    </div>


                    {/* Early Access Benefits */}
                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
                        <div className="flex items-center">
                            <span className="mr-2">✨</span>
                            Priority Feature Access
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">🎯</span>
                            Beta Testing Opportunities
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">🏆</span>
                            Founder's Badge
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">💬</span>
                            Direct Feedback Channel
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoonSection;