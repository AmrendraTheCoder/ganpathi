import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart,
  Bell,
  Download,
  Filter,
  MessageSquare,
  PieChart,
  Search,
  Settings,
  Users,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("inquiries");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [responseDialogOpen, setResponseDialogOpen] = useState(false);

  // Mock data for inquiries
  const inquiries: Inquiry[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+91 9876543210",
      service: "Offset Printing",
      message: "I need 1000 business cards printed with my company logo.",
      status: "New",
      date: "2023-06-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+91 8765432109",
      service: "UV Printing",
      message: "Looking for quotes on UV printing for product packaging.",
      status: "In Progress",
      date: "2023-06-14",
    },
    {
      id: 3,
      name: "Raj Kumar",
      email: "raj@example.com",
      phone: "+91 7654321098",
      service: "Traditional Printing",
      message: "Need wedding invitation cards printed urgently.",
      status: "Completed",
      date: "2023-06-12",
    },
    {
      id: 4,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 6543210987",
      service: "Offset Printing",
      message: "Requesting a quote for company brochures.",
      status: "New",
      date: "2023-06-10",
    },
  ];

  // Function to get badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return <Badge className="bg-blue-500">New</Badge>;
      case "In Progress":
        return <Badge className="bg-yellow-500">In Progress</Badge>;
      case "Completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  // Function to handle responding to an inquiry
  const handleRespondToInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setResponseDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Manage inquiries and leads for Ganpathi Overseas
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="font-medium">Admin User</div>
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                <Button
                  variant={activeTab === "inquiries" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("inquiries")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Inquiries
                </Button>
                <Button
                  variant={activeTab === "leads" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("leads")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Leads
                </Button>
                <Button
                  variant={activeTab === "analytics" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("analytics")}
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">New Inquiries</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Pending Responses</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold">28</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-3">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-4">
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="leads">Leads</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Inquiries Tab */}
            <TabsContent value="inquiries">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Customer Inquiries</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                          type="search"
                          placeholder="Search inquiries..."
                          className="pl-8 w-[200px] md:w-[300px]"
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                    </div>
                  </div>
                  <CardDescription>
                    Manage and respond to customer inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiries.map((inquiry) => (
                        <TableRow key={inquiry.id}>
                          <TableCell>{inquiry.id}</TableCell>
                          <TableCell>{inquiry.name}</TableCell>
                          <TableCell>{inquiry.service}</TableCell>
                          <TableCell>{inquiry.date}</TableCell>
                          <TableCell>
                            {getStatusBadge(inquiry.status)}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleRespondToInquiry(inquiry)}
                            >
                              Respond
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-gray-500">
                    Showing 4 of 45 inquiries
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Leads Tab */}
            <TabsContent value="leads">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Lead Management</CardTitle>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Export Data
                    </Button>
                  </div>
                  <CardDescription>
                    Track and analyze potential customer leads
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Leads by Service
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-[200px] items-center justify-center">
                          <PieChart className="h-32 w-32 text-gray-400" />
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                            <div className="text-sm">Offset Printing (45%)</div>
                          </div>
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <div className="text-sm">UV Printing (30%)</div>
                          </div>
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                            <div className="text-sm">
                              Traditional Printing (25%)
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Lead Conversion Rate
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-[200px] items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-bold">68%</div>
                            <div className="text-sm text-gray-500">
                              Conversion Rate
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Recent Activity
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <div className="h-2 w-2 mt-2 rounded-full bg-blue-500"></div>
                              <div>
                                <p className="text-sm font-medium">
                                  New lead from website
                                </p>
                                <p className="text-xs text-gray-500">
                                  2 hours ago
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>
                    View detailed analytics about your business performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full flex items-center justify-center border rounded-md">
                    <div className="text-center">
                      <BarChart className="h-16 w-16 mx-auto text-gray-400" />
                      <p className="mt-2 text-gray-500">
                        Analytics visualization will appear here
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Inquiries
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">245</div>
                        <p className="text-xs text-green-500">
                          ↑ 12% from last month
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Conversion Rate
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">68%</div>
                        <p className="text-xs text-green-500">
                          ↑ 4% from last month
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Average Response Time
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">3.2h</div>
                        <p className="text-xs text-red-500">
                          ↓ 0.5h from target
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Configure how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-500">
                          Receive email notifications for new inquiries
                        </p>
                      </div>
                      <Switch defaultChecked id="email-notifications" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">SMS Notifications</h4>
                        <p className="text-sm text-gray-500">
                          Receive SMS alerts for urgent inquiries
                        </p>
                      </div>
                      <Switch id="sms-notifications" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Daily Summary</h4>
                        <p className="text-sm text-gray-500">
                          Receive a daily summary of all activities
                        </p>
                      </div>
                      <Switch defaultChecked id="daily-summary" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">
                      Email Address for Notifications
                    </h4>
                    <Input defaultValue="admin@ganpathioverseas.com" />
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Phone Number for SMS Alerts</h4>
                    <Input defaultValue="+91 9876543210" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Response Dialog */}
      <Dialog open={responseDialogOpen} onOpenChange={setResponseDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Respond to Inquiry</DialogTitle>
            <DialogDescription>
              {selectedInquiry && (
                <div className="mt-2 space-y-2">
                  <div>
                    <span className="font-medium">From:</span>{" "}
                    {selectedInquiry.name} ({selectedInquiry.email})
                  </div>
                  <div>
                    <span className="font-medium">Service:</span>{" "}
                    {selectedInquiry.service}
                  </div>
                  <div>
                    <span className="font-medium">Message:</span>{" "}
                    {selectedInquiry.message}
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="response">Your Response</Label>
              <Textarea
                id="response"
                placeholder="Type your response here..."
                className="min-h-[150px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Update Status</Label>
              <Select defaultValue="in-progress">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setResponseDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setResponseDialogOpen(false)}>
              Send Response
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Types
interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  date: string;
}

export default AdminDashboard;
