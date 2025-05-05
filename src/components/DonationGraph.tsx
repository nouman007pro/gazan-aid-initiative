
import React from 'react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Cell,
  Legend,
  LabelList
} from 'recharts';
import { ChartPie } from 'lucide-react';

interface DonationCategory {
  name: string;
  value: number;
  count: number;
  color: string;
}

const DonationGraph = () => {
  // Sample data - in a real app, this would come from API/backend
  const data: DonationCategory[] = [
    { name: '$3000+', value: 12500, count: 3, color: '#1EAEDB' }, // Bright Blue
    { name: '$2000+', value: 8200, count: 5, color: '#7E69AB' },  // Secondary Purple
    { name: '$1000+', value: 6300, count: 8, color: '#FEF7CD' },  // Soft Yellow
    { name: '$500+', value: 7500, count: 22, color: '#F97316' },  // Bright Orange
    { name: 'Under $50', value: 3200, count: 76, color: '#ea384c' }, // Red
  ];

  const totalDonors = data.reduce((acc, item) => acc + item.count, 0);
  const totalAmount = data.reduce((acc, item) => acc + item.value, 0);

  const config = {
    blue: { theme: { light: '#1EAEDB', dark: '#1EAEDB' } },
    purple: { theme: { light: '#7E69AB', dark: '#7E69AB' } },
    yellow: { theme: { light: '#FEF7CD', dark: '#FEF7CD' } },
    orange: { theme: { light: '#F97316', dark: '#F97316' } },
    red: { theme: { light: '#ea384c', dark: '#ea384c' } },
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="section-heading">Donation Impact</h2>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <ChartPie className="text-gaza-primary" size={20} />
            <span className="text-gaza-dark font-semibold">{totalDonors} Contributors</span>
            <span className="text-gaza-accent font-bold">${totalAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-gaza-dark">Donation Breakdown by Amount</h3>
            <p className="text-sm text-gaza-dark/70">Color indicates donation tier, bar height shows total amount</p>
          </div>

          <div className="h-80">
            <ChartContainer config={config} className="h-full w-full">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis 
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                  width={80}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value: any, name: any) => [`$${Number(value).toLocaleString()}`, 'Total']}
                  labelFormatter={(label) => `${label} Donations`}
                />
                <Legend formatter={(value) => `${value} (Donors: ${data.find(d => d.name === value)?.count || 0})`} />
                <Bar dataKey="value" name="Amount" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <LabelList 
                    dataKey="count" 
                    position="top" 
                    formatter={(value: any) => `${value} donors`} 
                    style={{ fill: '#555', fontSize: '12px' }}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
            {data.map((category) => (
              <div key={category.name} className="p-2">
                <div 
                  className="w-4 h-4 mx-auto mb-1 rounded-sm" 
                  style={{ backgroundColor: category.color }}
                />
                <p className="text-xs font-medium">{category.name}</p>
                <p className="text-xs text-gray-500">{category.count} donors</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationGraph;
