import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

const TabsContents = ({ data, title, value }) => {
  return (
    <div>
      <TabsContent value={value}>
        <Card>
          <CardHeader>
            <CardTitle>{title} Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt={data.name} />
                <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{data.name}</p>
                <p className="text-sm text-gray-500">{data.date}</p>
              </div>
              <div className="ml-auto">
                <p className="font-bold">₹{data.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Referral-Kyc</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Sr. No</span>
                <span>{data.serialNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">User status</span>
                <span className="font-semibold text-green-600">
                  {data.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Details</span>
                <span>Referral-Kyc</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
};

export default TabsContents;
