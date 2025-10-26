"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Shield,
  ArrowLeft,
  QrCode,
  Share2,
  Copy,
  CheckCircle,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Download,
  Eye,
  Edit,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DigitalProfile() {
  const [copied, setCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const profileUrl = "vaultify.app/profile/johndoe-2024";

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${profileUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Mock profile data
  const profile = {
    name: "John Doe",
    title: "Software Engineer",
    location: "Kathmandu, Nepal",
    email: "john.doe@example.com",
    phone: "+977 98XXXXXXXX",
    website: "johndoe.com",
    linkedin: "linkedin.com/in/johndoe",
    bio: "Experienced software engineer with 5+ years in full-stack development. Passionate about building scalable applications and mentoring junior developers.",
    education: [
      {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Tribhuvan University",
        year: "2015-2019",
        verified: true,
      },
      {
        degree: "High School Diploma",
        institution: "Nepal Model School",
        year: "2013-2015",
        verified: true,
      },
    ],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Solutions Ltd.",
        period: "2021 - Present",
        verified: true,
      },
      {
        title: "Software Engineer",
        company: "StartupHub Nepal",
        period: "2019 - 2021",
        verified: true,
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
        verified: true,
      },
      {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        year: "2022",
        verified: true,
      },
    ],
    documents: [
      { name: "Resume", type: "PDF", verified: true },
      { name: "Portfolio", type: "Link", verified: true },
      { name: "References", type: "PDF", verified: true },
    ],
  };

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
                  <h1 className="text-lg font-bold">Digital Profile</h1>
                  <p className="text-xs text-slate-600">
                    Create your verified identity
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setPreviewMode(!previewMode)}
              >
                <Eye className="w-4 h-4 mr-2" />
                {previewMode ? "Edit Mode" : "Preview"}
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Share Your Digital Profile</DialogTitle>
                    <DialogDescription>
                      Share your verified profile via link or QR code
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="bg-white border-2 rounded-lg p-6 flex justify-center">
                      <div className="w-48 h-48 bg-slate-100 rounded-lg flex items-center justify-center">
                        <QrCode className="w-32 h-32 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm mb-2">Profile Link</Label>
                      <div className="flex gap-2">
                        <Input value={profileUrl} readOnly className="flex-1" />
                        <Button
                          variant="outline"
                          onClick={handleCopy}
                          className="gap-2"
                        >
                          {copied ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download QR
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Link
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {!previewMode ? (
          // Edit Mode
          <div className="space-y-6">
            {/* Basic Info */}
            <Card className="p-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Basic Information</h2>
                <Edit className="w-5 h-5 text-slate-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600">
                    <AvatarFallback className="text-white text-2xl font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          defaultValue={profile.name}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="title">Professional Title</Label>
                        <Input
                          id="title"
                          defaultValue={profile.title}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={profile.email}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      defaultValue={profile.phone}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      defaultValue={profile.location}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      defaultValue={profile.website}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    defaultValue={profile.bio}
                    className="mt-2"
                    rows={4}
                  />
                </div>
              </div>
            </Card>

            {/* Visibility Settings */}
            <Card className="p-6 bg-white">
              <h2 className="text-xl font-bold mb-6">Visibility Settings</h2>
              <div className="space-y-4">
                {[
                  { label: "Show Email", id: "show-email" },
                  { label: "Show Phone Number", id: "show-phone" },
                  { label: "Show Location", id: "show-location" },
                  { label: "Show Education", id: "show-education" },
                  { label: "Show Experience", id: "show-experience" },
                  { label: "Show Certifications", id: "show-certs" },
                ].map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between py-3 border-b last:border-0"
                  >
                    <Label htmlFor={setting.id} className="cursor-pointer">
                      {setting.label}
                    </Label>
                    <Switch id={setting.id} defaultChecked />
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600">
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          // Preview Mode
          <div className="space-y-6">
            {/* Profile Header */}
            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600">
                  <AvatarFallback className="text-white text-4xl font-bold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">
                        {profile.name}
                      </h1>
                      <p className="text-lg text-slate-700 mb-4">
                        {profile.title}
                      </p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {profile.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {profile.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {profile.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {profile.website}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-emerald-200">
                <p className="text-slate-700 leading-relaxed">{profile.bio}</p>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                {profile.education.map((edu, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-slate-50 border-l-4 border-emerald-500"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-slate-600">
                          {edu.institution}
                        </p>
                      </div>
                      {edu.verified && (
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold">Experience</h2>
              </div>
              <div className="space-y-4">
                {profile.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-slate-50 border-l-4 border-teal-500"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-slate-600">{exp.company}</p>
                      </div>
                      {exp.verified && (
                        <Badge className="bg-teal-100 text-teal-700 border-teal-200">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold">Certifications</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {profile.certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-slate-50 border-l-4 border-violet-500"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm">{cert.name}</h3>
                      {cert.verified && (
                        <CheckCircle className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-slate-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Documents */}
            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-sky-600" />
                </div>
                <h2 className="text-xl font-bold">Verified Documents</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {profile.documents.map((doc, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border-2 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FileText className="w-8 h-8 text-sky-600" />
                      {doc.verified && (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{doc.name}</h3>
                    <p className="text-xs text-slate-500">{doc.type}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Footer */}
            <Card className="p-6 bg-slate-50 border-2 border-dashed">
              <div className="text-center">
                <Shield className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-sm text-slate-600">
                  This profile is secured and verified by{" "}
                  <span className="font-semibold text-emerald-600">
                    Vaultify
                  </span>
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  All credentials and documents are verified with AES-256
                  encryption
                </p>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
