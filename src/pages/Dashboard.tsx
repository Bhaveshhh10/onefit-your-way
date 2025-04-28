
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, DumbbellIcon, Search, MessageSquare } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for dashboard
  const upcomingSessions = [
    {
      id: 1,
      trainerName: "Arjun Singh",
      specialty: "Weight Loss",
      date: "Tomorrow",
      time: "10:00 AM",
      isOnline: true,
    },
    {
      id: 2,
      trainerName: "Priya Patel",
      specialty: "Yoga",
      date: "Friday, May 3",
      time: "6:00 PM",
      isOnline: false,
    },
  ];

  const recentProgress = [
    { date: "Apr 25", weight: 78, workout: "Completed", diet: "Followed" },
    { date: "Apr 24", weight: 78.5, workout: "Completed", diet: "Partial" },
    { date: "Apr 23", weight: 78.7, workout: "Missed", diet: "Followed" },
    { date: "Apr 22", weight: 79, workout: "Completed", diet: "Followed" },
    { date: "Apr 21", weight: 79.2, workout: "Completed", diet: "Followed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container py-8">
        {/* Dashboard Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome, Rahul!</h1>
            <p className="text-gray-600">Here's an overview of your fitness journey</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button className="bg-onefit-blue hover:bg-blue-600">
              <Calendar className="mr-2 h-4 w-4" />
              Book New Session
            </Button>
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Find Trainers
            </Button>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-500 mb-2">Current Plan</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">Plus Plan</p>
            <p className="text-sm text-gray-600">Renews on May 15, 2025</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">3 sessions</span> remaining this week
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-500 mb-2">Current Weight</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">78.0 kg</p>
            <p className="text-sm text-green-600 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Down 1.2kg this month
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Goal:</span> 75kg by June 15
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-500 mb-2">Workout Streak</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">4 days</p>
            <p className="text-sm text-gray-600">Great momentum!</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Best:</span> 12 days
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Last month:</span> 21 workouts
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Content */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 md:w-[400px] mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="diet">Diet Plan</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              {upcomingSessions.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {upcomingSessions.map(session => (
                    <div key={session.id} className="py-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{session.date} at {session.time}</p>
                        <p className="text-sm text-gray-600">{session.trainerName} • {session.specialty}</p>
                        <p className="text-sm mt-1">
                          {session.isOnline ? (
                            <span className="text-green-600">Online Session</span>
                          ) : (
                            <span className="text-blue-600">In-Person Session</span>
                          )}
                        </p>
                      </div>
                      <div className="space-x-2">
                        {session.isOnline && (
                          <Button size="sm" className="bg-onefit-blue hover:bg-blue-600">
                            Join
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <DumbbellIcon className="mx-auto h-12 w-12 text-gray-300" />
                  <p className="mt-4 text-gray-500">No upcoming sessions</p>
                  <Button className="mt-4 bg-onefit-blue hover:bg-blue-600">Book a Session</Button>
                </div>
              )}
            </div>
            
            {/* Progress Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold">Recent Progress</h2>
                <Button variant="outline" size="sm" onClick={() => setActiveTab("progress")}>
                  Full Report
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workout</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentProgress.map((day, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{day.date}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{day.weight} kg</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          {day.workout === "Completed" ? (
                            <span className="text-green-600">{day.workout}</span>
                          ) : (
                            <span className="text-red-600">{day.workout}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          {day.diet === "Followed" ? (
                            <span className="text-green-600">{day.diet}</span>
                          ) : (
                            <span className="text-amber-600">{day.diet}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Message Trainer Box */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 rounded-full p-3">
                  <MessageSquare className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Message Your Trainer</h3>
                  <p className="text-sm text-gray-600 mb-3">Have questions about your program? Reach out to your trainer directly.</p>
                  <Button className="bg-onefit-blue hover:bg-blue-600">Send Message</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="workouts" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-5">Today's Workout</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Warm-up (10 min)</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Cardio</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                    <li>5 min light jogging in place</li>
                    <li>Dynamic stretching sequence</li>
                    <li>Mobility exercises for shoulders and hips</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Main Workout (30 min)</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Strength</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                    <li>3 sets x 12 reps Squats</li>
                    <li>3 sets x 10 reps Push-ups</li>
                    <li>3 sets x 15 reps Lunges (each leg)</li>
                    <li>3 sets x 30 sec Plank hold</li>
                    <li>2 min rest between circuits, repeat 3 times</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Cool Down (5 min)</h3>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Flexibility</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                    <li>Static stretching for major muscle groups</li>
                    <li>Deep breathing exercises</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button variant="outline">View Instructions</Button>
                <Button className="bg-green-600 hover:bg-green-700">Mark as Complete</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold">Weekly Workout Schedule</h2>
                <Button variant="outline" size="sm">Download PDF</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b text-left text-xs font-medium text-gray-500 uppercase">Day</th>
                      <th className="px-4 py-2 border-b text-left text-xs font-medium text-gray-500 uppercase">Focus</th>
                      <th className="px-4 py-2 border-b text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                      <th className="px-4 py-2 border-b text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Monday</td>
                      <td className="px-4 py-3 border-b text-sm">Upper Body Strength</td>
                      <td className="px-4 py-3 border-b text-sm">45 min</td>
                      <td className="px-4 py-3 border-b text-sm">
                        <span className="text-green-600">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Tuesday</td>
                      <td className="px-4 py-3 border-b text-sm">Cardio & Core</td>
                      <td className="px-4 py-3 border-b text-sm">30 min</td>
                      <td className="px-4 py-3 border-b text-sm">
                        <span className="text-green-600">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Wednesday</td>
                      <td className="px-4 py-3 border-b text-sm">Rest Day</td>
                      <td className="px-4 py-3 border-b text-sm">-</td>
                      <td className="px-4 py-3 border-b text-sm">
                        <span className="text-gray-500">N/A</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Thursday</td>
                      <td className="px-4 py-3 border-b text-sm">Lower Body Strength</td>
                      <td className="px-4 py-3 border-b text-sm">45 min</td>
                      <td className="px-4 py-3 border-b text-sm">
                        <span className="text-blue-600">Today</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Friday</td>
                      <td className="px-4 py-3 border-b text-sm">HIIT Workout</td>
                      <td className="px-4 py-3 border-b text-sm">30 min</td>
                      <td className="px-4 py-3 border-b text-sm">
                        <span className="text-gray-500">Upcoming</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Saturday</td>
                      <td className="px-4 py-3 border-b text-sm">Full Body Workout</td>
                      <td className="px-4 py-3 border-b text-sm">60 min</td>
                      <td className="px-4 py-3 border-b text-sm">
                        <span className="text-gray-500">Upcoming</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Sunday</td>
                      <td className="px-4 py-3 text-sm">Rest Day</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="text-gray-500">N/A</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="diet" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-5">Today's Meal Plan</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg">Breakfast (7:00 AM)</h3>
                  </div>
                  <div className="ml-10">
                    <ul className="list-disc space-y-1 text-gray-600">
                      <li>Vegetable omelette with 2 eggs</li>
                      <li>1 slice whole grain toast</li>
                      <li>1/2 avocado</li>
                      <li>1 cup green tea (unsweetened)</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">Approx. 450 calories, 25g protein, 30g carbs, 25g fat</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg">Mid-Morning Snack (10:00 AM)</h3>
                  </div>
                  <div className="ml-10">
                    <ul className="list-disc space-y-1 text-gray-600">
                      <li>1 apple</li>
                      <li>15g almonds (approx. 12-15 nuts)</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">Approx. 170 calories, 4g protein, 25g carbs, 9g fat</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg">Lunch (1:00 PM)</h3>
                  </div>
                  <div className="ml-10">
                    <ul className="list-disc space-y-1 text-gray-600">
                      <li>Quinoa bowl with 1/2 cup cooked quinoa</li>
                      <li>100g grilled chicken</li>
                      <li>Mixed vegetables (bell peppers, spinach, tomatoes)</li>
                      <li>2 tbsp olive oil and lemon dressing</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">Approx. 550 calories, 35g protein, 40g carbs, 25g fat</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="bg-onefit-blue hover:bg-blue-600">View Full Day's Plan</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-5">Weekly Grocery List</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Vegetables & Fruits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Spinach</span>
                      <span className="text-gray-500">1 bunch</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Bell peppers</span>
                      <span className="text-gray-500">3 mixed colors</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Tomatoes</span>
                      <span className="text-gray-500">6 medium</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Avocados</span>
                      <span className="text-gray-500">2 ripe</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Apples</span>
                      <span className="text-gray-500">5 medium</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Bananas</span>
                      <span className="text-gray-500">6 medium</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Protein</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Chicken breast</span>
                      <span className="text-gray-500">500g</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Eggs</span>
                      <span className="text-gray-500">12</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Paneer</span>
                      <span className="text-gray-500">200g</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Greek yogurt</span>
                      <span className="text-gray-500">500g</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline">Download Complete List</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="progress" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-5">Your Progress</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-500 mb-1">Starting Weight</h3>
                  <p className="text-2xl font-semibold">82.5 kg</p>
                  <p className="text-xs text-gray-500">Mar 15, 2025</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-500 mb-1">Current Weight</h3>
                  <p className="text-2xl font-semibold">78.0 kg</p>
                  <p className="text-xs text-gray-500">Apr 28, 2025</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-500 mb-1">Goal Weight</h3>
                  <p className="text-2xl font-semibold">75.0 kg</p>
                  <p className="text-xs text-gray-500">Target: June 15, 2025</p>
                </div>
              </div>
              
              <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                {/* This would be a chart in a real application */}
                <p className="text-gray-500">Weight progress chart would appear here</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Body Measurements</h3>
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Measurement</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Start</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Current</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 text-sm">Chest</td>
                        <td className="py-2 text-sm">102 cm</td>
                        <td className="py-2 text-sm">98 cm</td>
                        <td className="py-2 text-sm text-green-600">-4 cm</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Waist</td>
                        <td className="py-2 text-sm">92 cm</td>
                        <td className="py-2 text-sm">87 cm</td>
                        <td className="py-2 text-sm text-green-600">-5 cm</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Hips</td>
                        <td className="py-2 text-sm">104 cm</td>
                        <td className="py-2 text-sm">101 cm</td>
                        <td className="py-2 text-sm text-green-600">-3 cm</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Thighs</td>
                        <td className="py-2 text-sm">61 cm</td>
                        <td className="py-2 text-sm">59 cm</td>
                        <td className="py-2 text-sm text-green-600">-2 cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Fitness Assessments</h3>
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Exercise</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Start</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Current</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 text-sm">Push-ups</td>
                        <td className="py-2 text-sm">12</td>
                        <td className="py-2 text-sm">18</td>
                        <td className="py-2 text-sm text-green-600">+6</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Plank</td>
                        <td className="py-2 text-sm">45 sec</td>
                        <td className="py-2 text-sm">90 sec</td>
                        <td className="py-2 text-sm text-green-600">+45 sec</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">1km Run</td>
                        <td className="py-2 text-sm">7:20</td>
                        <td className="py-2 text-sm">6:40</td>
                        <td className="py-2 text-sm text-green-600">-40 sec</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Squats (max)</td>
                        <td className="py-2 text-sm">20</td>
                        <td className="py-2 text-sm">30</td>
                        <td className="py-2 text-sm text-green-600">+10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold">Photos</h2>
                <Button variant="outline" size="sm">Upload New Photos</Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=100&h=150"
                    alt="Progress photo" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-xs text-center text-gray-500 mt-1">March 15</p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=100&h=150"
                    alt="Progress photo" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-xs text-center text-gray-500 mt-1">April 1</p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=100&h=150"
                    alt="Progress photo" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-xs text-center text-gray-500 mt-1">April 15</p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=100&h=150"
                    alt="Progress photo" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-xs text-center text-gray-500 mt-1">April 28</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
