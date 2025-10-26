"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Upload,
  FileText,
  AlertCircle,
  CheckCircle,
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  Plus,
  Bell,
  Settings,
  LogOut,
  FileCheck,
  Clock,
  TrendingUp,
  Users,
  Sparkles,
  QrCode,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock data
const mockDocuments = [
  {
    id: 1,
    name: "Passport",
    category: "ID",
    uploadDate: "2024-01-15",
    expiryDate: "2028-01-15",
    status: "verified",
    size: "2.3 MB",
  },
  {
    id: 2,
    name: "Driver License",
    category: "ID",
    uploadDate: "2024-02-20",
    expiryDate: "2025-11-30",
    status: "expiring_soon",
    size: "1.8 MB",
  },
  {
    id: 3,
    name: "Degree Certificate",
    category: "Education",
    uploadDate: "2023-12-10",
    expiryDate: null,
    status: "verified",
    size: "3.1 MB",
  },
  {
    id: 4,
    name: "Tax Return 2024",
    category: "Finance",
    uploadDate: "2024-03-01",
    expiryDate: "2025-12-31",
    status: "expiring_soon",
    size: "890 KB",
  },
  {
    id: 5,
    name: "Health Insurance",
    category: "Insurance",
    uploadDate: "2024-01-05",
    expiryDate: "2025-01-05",
    status: "verified",
    size: "1.2 MB",
  },
];

const expiringDocuments = mockDocuments.filter(
  (doc) => doc.status === "expiring_soon"
);

export default function Dashboard() {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = mockDocuments.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Vaultify
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-emerald-600"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Digital Profile
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Avatar className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600">
                <AvatarFallback className="text-white font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-slate-600">
            Here's an overview of your digital vault
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-1">
              {mockDocuments.length}
            </div>
            <div className="text-sm text-slate-600">Total Documents</div>
            <div className="mt-2 text-xs text-slate-500">
              +2 from last month
            </div>
          </Card>

          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-1">
              {expiringDocuments.length}
            </div>
            <div className="text-sm text-slate-600">Expiring Soon</div>
            <div className="mt-2 text-xs text-slate-500">
              Action required
            </div>
          </Card>

          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <FileCheck className="w-5 h-5 text-teal-600" />
            </div>
            <div className="text-3xl font-bold text-teal-600 mb-1">100%</div>
            <div className="text-sm text-slate-600">Verified</div>
            <div className="mt-2 text-xs text-slate-500">All documents verified</div>
          </Card>

          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-violet-600" />
              </div>
              <Sparkles className="w-5 h-5 text-violet-600" />
            </div>
            <div className="text-3xl font-bold text-violet-600 mb-1">12.8</div>
            <div className="text-sm text-slate-600">GB Storage Used</div>
            <Progress value={32} className="mt-2 h-1.5" />
          </Card>
        </div>

        {/* Alerts Banner */}
        {expiringDocuments.length > 0 && (
          <Card className="p-4 mb-8 bg-amber-50 border-2 border-amber-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900 mb-1">
                  {expiringDocuments.length} documents expiring soon
                </h3>
                <p className="text-sm text-amber-700">
                  {expiringDocuments.map((doc) => doc.name).join(", ")} need to
                  be renewed. Review them now to avoid expiration.
                </p>
              </div>
              <Button
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Review Now
              </Button>
            </div>
          </Card>
        )}

        {/* Main Tabs */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="documents">All Documents</TabsTrigger>
            <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            {/* Filters and Upload */}
            <Card className="p-6 bg-white">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex-1 flex gap-4 w-full md:w-auto">
                  <div className="relative flex-1 md:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      placeholder="Search documents..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-40">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="ID">ID Documents</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Insurance">Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Upload Document
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Upload New Document</DialogTitle>
                      <DialogDescription>
                        Upload a document to your vault. AI will automatically
                        extract metadata.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="file">Document File</Label>
                        <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                          <p className="text-sm font-medium mb-1">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-slate-500">
                            PDF, PNG, JPG up to 10MB
                          </p>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="id">ID Documents</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="insurance">Insurance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="expiry">Expiry Date (Optional)</Label>
                        <Input type="date" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="notes">Notes (Optional)</Label>
                        <Textarea
                          placeholder="Add any notes about this document..."
                          className="mt-2"
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => setUploadOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600"
                          onClick={() => setUploadOpen(false)}
                        >
                          Upload
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>

            {/* Documents Table */}
            <Card className="bg-white overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">Document</TableHead>
                    <TableHead className="font-semibold">Category</TableHead>
                    <TableHead className="font-semibold">Upload Date</TableHead>
                    <TableHead className="font-semibold">Expiry Date</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Size</TableHead>
                    <TableHead className="text-right font-semibold">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((doc) => (
                    <TableRow key={doc.id} className="hover:bg-slate-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-slate-600" />
                          </div>
                          <span className="font-medium">{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{doc.category}</Badge>
                      </TableCell>
                      <TableCell className="text-slate-600">
                        {new Date(doc.uploadDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-slate-600">
                        {doc.expiryDate
                          ? new Date(doc.expiryDate).toLocaleDateString()
                          : "N/A"}
                      </TableCell>
                      <TableCell>
                        {doc.status === "verified" ? (
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Expiring Soon
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-slate-600">{doc.size}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="expiring" className="space-y-6">
            <Card className="bg-white overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">Documents Expiring Soon</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Review and renew these documents to keep your vault up to date
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">Document</TableHead>
                    <TableHead className="font-semibold">Expiry Date</TableHead>
                    <TableHead className="font-semibold">Days Left</TableHead>
                    <TableHead className="text-right font-semibold">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expiringDocuments.map((doc) => {
                    const daysLeft = Math.floor(
                      (new Date(doc.expiryDate!).getTime() -
                        new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    );
                    return (
                      <TableRow key={doc.id} className="hover:bg-slate-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-amber-600" />
                            </div>
                            <span className="font-medium">{doc.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {new Date(doc.expiryDate!).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                            {daysLeft} days
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-2">
                            <Button size="sm" variant="outline">
                              Renew
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-emerald-600 to-teal-600"
                            >
                              Update
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card className="bg-white p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  {
                    action: "Uploaded",
                    doc: "Tax Return 2024",
                    time: "2 hours ago",
                  },
                  {
                    action: "Verified",
                    doc: "Health Insurance",
                    time: "5 hours ago",
                  },
                  {
                    action: "Downloaded",
                    doc: "Passport",
                    time: "1 day ago",
                  },
                  {
                    action: "Updated",
                    doc: "Driver License",
                    time: "2 days ago",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        {activity.action}{" "}
                        <span className="text-emerald-600">{activity.doc}</span>
                      </p>
                      <p className="text-sm text-slate-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Share Digital Profile</h3>
            <p className="text-sm text-emerald-50 mb-4">
              Generate a QR code or link to share your verified profile
            </p>
            <Button variant="secondary" size="sm" className="bg-white text-emerald-600 hover:bg-slate-50">
              Create Link
            </Button>
          </Card>

          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Document Insights</h3>
            <p className="text-sm text-slate-600 mb-4">
              Get AI-powered recommendations and missing document alerts
            </p>
            <Button variant="outline" size="sm">
              View Insights
            </Button>
          </Card>

          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Invite Team Members</h3>
            <p className="text-sm text-slate-600 mb-4">
              Add colleagues or family members to your vault
            </p>
            <Button variant="outline" size="sm">
              Send Invite
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
