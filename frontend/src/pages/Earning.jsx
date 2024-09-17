import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BottomNav from "@/components/BottomNav";
import TabsContents from "@/components/TabsContents";
import { Gift, Users, Wallet } from "lucide-react";

const EarningsDashboard = () => {
  const earningsData = {
    total: 2875.0,
    self: 8.0,
    referral: 2867.0,
    reward: 0.0,
    coins: 3982,
  };

  const referralData = {
    name: "Abul Babul",
    amount: 2.0,
    date: "Sat Nov 19 2023",
    status: "Premium",
    serialNo: 47,
  };

  const selfData = {
    name: "Cabul Dabul",
    amount: 24.0,
    date: "Sat Nov 23 2024",
    status: "Premium",
    serialNo: 51,
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">My Earnings</CardTitle>
            <div className="flex items-center space-x-2">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm font-semibold">
                🏆 {earningsData.coins}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                ₹{earningsData.total.toFixed(2)}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">Earnings Statistics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Wallet className="mx-auto text-blue-500 mb-1" />
                <p className="text-sm font-medium">Self</p>
                <p className="text-lg font-bold">
                  ₹{earningsData.self.toFixed(2)}
                </p>
              </div>
              <div className="text-center">
                <Users className="mx-auto text-green-500 mb-1" />
                <p className="text-sm font-medium">Referral</p>
                <p className="text-lg font-bold">
                  ₹{earningsData.referral.toFixed(2)}
                </p>
              </div>
              <div className="text-center">
                <Gift className="mx-auto text-purple-500 mb-1" />
                <p className="text-sm font-medium">Reward</p>
                <p className="text-lg font-bold">
                  ₹{earningsData.reward.toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="referral">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="self">Self</TabsTrigger>
            <TabsTrigger value="referral">Referral</TabsTrigger>
            <TabsTrigger value="reward">Reward</TabsTrigger>
          </TabsList>

          <TabsContents
            value={"referral"}
            data={referralData}
            title={"Referral"}
          />
          <TabsContents value={"self"} data={selfData} title={"Self"} />
          <TabsContents value={"reward"} data={selfData} title={"Reward"} />
        </Tabs>
      </div>
      <BottomNav />
    </div>
  );
};

export default EarningsDashboard;
