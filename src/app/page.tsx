import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Bell,
  FileCheck,
  Users,
  Lock,
  Brain,
  Upload,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Vaultify
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
            <Sparkles className="w-3 h-3 mr-1" />
            Your Lifetime Digital Identity Vault
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Secure Your Documents.
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Simplify Your Life.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI-powered digital vault for individuals, students, and businesses to store, organize, and verify critical documents with automated expiry tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg px-8" asChild>
              <Link href="/dashboard">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Free forever • No credit card required • 5 documents included
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
          <div className="relative bg-white rounded-2xl shadow-2xl border overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="p-6 bg-white border-2">
                  <div className="text-3xl font-bold text-emerald-600">24</div>
                  <div className="text-sm text-slate-600">Total Documents</div>
                </Card>
                <Card className="p-6 bg-white border-2">
                  <div className="text-3xl font-bold text-amber-600">3</div>
                  <div className="text-sm text-slate-600">Expiring Soon</div>
                </Card>
                <Card className="p-6 bg-white border-2">
                  <div className="text-3xl font-bold text-teal-600">100%</div>
                  <div className="text-sm text-slate-600">Verified</div>
                </Card>
              </div>
              <Card className="p-6 bg-white">
                <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-16 h-16 text-slate-400" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features to manage your digital identity with ease
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "Smart Document Storage",
                description: "Upload PDFs/images with auto-tagging by category. OCR + AI extract document type, expiry date, and metadata.",
                color: "emerald",
              },
              {
                icon: Bell,
                title: "Expiry Alerts & Renewals",
                description: "Automated reminders via SMS, email, or app for document expiry, contract renewals, and tax deadlines.",
                color: "amber",
              },
              {
                icon: FileCheck,
                title: "Verified Digital Profiles",
                description: "Create and share a secure, verified digital resume or business profile via link/QR code.",
                color: "teal",
              },
              {
                icon: Users,
                title: "Multi-User & Role Access",
                description: "Businesses can add employees; institutions manage student sets under one dashboard.",
                color: "sky",
              },
              {
                icon: Lock,
                title: "Data Encryption",
                description: "AES-256 encryption with optional blockchain hash verification. API-ready for validation.",
                color: "red",
              },
              {
                icon: Brain,
                title: "AI Insights",
                description: "Dashboard analytics on expiry trends, missing documents, and renewal history with smart assistant.",
                color: "violet",
              },
            ].map((feature, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition-shadow bg-white border-2">
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Choose the plan that's right for you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Free",
                price: "₹0",
                period: "forever",
                users: "1 User",
                features: ["5 documents", "Basic storage", "Email alerts", "Mobile app"],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Pro",
                price: "₹999",
                period: "per year",
                users: "Individual",
                features: ["Unlimited docs", "AI reminders", "Digital profile", "Priority support", "Advanced analytics"],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Business",
                price: "₹10,000",
                period: "per year",
                users: "Up to 50 Users",
                features: ["Multi-user access", "Compliance alerts", "API access", "Admin dashboard", "Custom branding"],
                cta: "Contact Sales",
                popular: false,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                users: "Unlimited",
                features: ["Bulk verification", "Dedicated support", "Custom integrations", "SLA guarantee", "On-premise option"],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, i) => (
              <Card key={i} className={`p-8 relative ${plan.popular ? 'border-emerald-500 border-2 shadow-xl scale-105' : 'border-2'} bg-white`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <div className="text-sm text-slate-600 mb-4">{plan.period}</div>
                  <div className="text-sm font-medium text-emerald-600">{plan.users}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Digital Identity?
          </h2>
          <p className="text-xl text-emerald-50 mb-10">
            Join thousands of users who trust Vaultify with their important documents
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-8" asChild>
            <Link href="/dashboard">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Vaultify</span>
              </div>
              <p className="text-sm">Your lifetime digital identity vault</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            © 2025 Vaultify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
