"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  FileText,
  Calendar,
  Brain,
  Sparkles,
  Clock,
  Download,
  Share2,
} from "lucide-react";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">AI Analytics</h1>
                  <p className="text-xs text-slate-600">
                    Insights powered by AI
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* AI Assistant Card */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-bold">AI Assistant</h2>
                <Sparkles className="w-4 h-4 text-violet-600" />
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-violet-200">
                  <p className="text-sm font-medium text-violet-900 mb-1">
                    Missing Document Alert
                  </p>
                  <p className="text-sm text-slate-600">
                    You're missing your <strong>2024 Tax Return</strong>. Based
                    on your profile, this document should be uploaded before
                    December 31, 2025.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-violet-200">
                  <p className="text-sm font-medium text-violet-900 mb-1">
                    Expiry Reminder
                  </p>
                  <p className="text-sm text-slate-600">
                    Your <strong>Driver License</strong> expires in 45 days.
                    Consider renewing it soon to avoid expiration.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-violet-200">
                  <p className="text-sm font-medium text-violet-900 mb-1">
                    Security Recommendation
                  </p>
                  <p className="text-sm text-slate-600">
                    Enable two-factor authentication for enhanced security of
                    your digital vault.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-1">24</div>
            <div className="text-sm text-slate-600 mb-2">
              Total Documents
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                +8.3%
              </Badge>
              <span className="text-slate-500">vs last month</span>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-1">3</div>
            <div className="text-sm text-slate-600 mb-2">
              Expiring Documents
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                Needs Action
              </Badge>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-teal-600" />
            </div>
            <div className="text-3xl font-bold text-teal-600 mb-1">21</div>
            <div className="text-sm text-slate-600 mb-2">
              Verified Documents
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Badge className="bg-teal-100 text-teal-700 border-teal-200">
                87.5%
              </Badge>
              <span className="text-slate-500">completion rate</span>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-violet-600" />
              </div>
              <TrendingDown className="w-5 h-5 text-violet-600" />
            </div>
            <div className="text-3xl font-bold text-violet-600 mb-1">6</div>
            <div className="text-sm text-slate-600 mb-2">Uploads This Month</div>
            <div className="flex items-center gap-2 text-xs">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200">
                -12%
              </Badge>
              <span className="text-slate-500">vs last month</span>
            </div>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Document Category Distribution */}
          <Card className="p-6 bg-white">
            <h2 className="text-lg font-bold mb-6">Document Distribution</h2>
            <div className="space-y-4">
              {[
                { name: "ID Documents", count: 8, color: "emerald", percent: 33 },
                { name: "Education", count: 6, color: "teal", percent: 25 },
                { name: "Finance", count: 5, color: "violet", percent: 21 },
                { name: "Insurance", count: 3, color: "amber", percent: 12 },
                { name: "Other", count: 2, color: "slate", percent: 9 },
              ].map((category) => (
                <div key={category.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full bg-${category.color}-500`}
                      />
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600">
                        {category.count} docs
                      </span>
                      <span className="text-sm font-semibold text-slate-900 w-12 text-right">
                        {category.percent}%
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={category.percent}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Expiry Timeline */}
          <Card className="p-6 bg-white">
            <h2 className="text-lg font-bold mb-6">Upcoming Expiries</h2>
            <div className="space-y-4">
              {[
                { doc: "Driver License", days: 45, status: "warning" },
                { doc: "Tax Return 2024", days: 120, status: "info" },
                { doc: "Health Insurance", days: 180, status: "safe" },
                { doc: "Professional License", days: 270, status: "safe" },
                { doc: "Passport", days: 1095, status: "safe" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.status === "warning"
                          ? "bg-amber-500"
                          : item.status === "info"
                            ? "bg-violet-500"
                            : "bg-emerald-500"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium">{item.doc}</p>
                      <p className="text-xs text-slate-500">
                        Expires in {item.days} days
                      </p>
                    </div>
                  </div>
                  {item.status === "warning" && (
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                      Soon
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Activity Timeline */}
        <Card className="p-6 bg-white mb-8">
          <h2 className="text-lg font-bold mb-6">Document Activity Timeline</h2>
          <div className="space-y-6">
            {[
              {
                month: "October 2025",
                activities: [
                  { action: "Uploaded", doc: "Tax Return 2024", date: "Oct 20" },
                  { action: "Verified", doc: "Health Insurance", date: "Oct 15" },
                  { action: "Renewed", doc: "Professional License", date: "Oct 5" },
                ],
              },
              {
                month: "September 2025",
                activities: [
                  { action: "Uploaded", doc: "Degree Certificate", date: "Sep 28" },
                  { action: "Updated", doc: "Passport", date: "Sep 12" },
                ],
              },
              {
                month: "August 2025",
                activities: [
                  { action: "Verified", doc: "Driver License", date: "Aug 22" },
                  { action: "Uploaded", doc: "Bank Statement", date: "Aug 10" },
                  { action: "Downloaded", doc: "Tax Return 2023", date: "Aug 3" },
                ],
              },
            ].map((month, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  {month.month}
                </h3>
                <div className="space-y-3 pl-6 border-l-2 border-slate-200">
                  {month.activities.map((activity, j) => (
                    <div key={j} className="relative">
                      <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                      <div className="p-3 rounded-lg bg-slate-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-slate-400" />
                            <p className="text-sm">
                              <span className="font-medium">{activity.action}</span>{" "}
                              <span className="text-emerald-600">{activity.doc}</span>
                            </p>
                          </div>
                          <span className="text-xs text-slate-500">
                            {activity.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Document Growth</h3>
            <p className="text-sm text-slate-600 mb-4">
              You've added 8.3% more documents compared to last month. Great job
              organizing your vault!
            </p>
            <div className="text-2xl font-bold text-emerald-600">+2 docs</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Action Required</h3>
            <p className="text-sm text-slate-600 mb-4">
              3 documents are expiring within the next 60 days. Review and renew
              them to stay current.
            </p>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
              Review Now
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Verification Rate</h3>
            <p className="text-sm text-slate-600 mb-4">
              87.5% of your documents are verified. Complete verification for
              full security.
            </p>
            <div className="text-2xl font-bold text-violet-600">21/24</div>
          </Card>
        </div>
      </main>
    </div>
  );
}
