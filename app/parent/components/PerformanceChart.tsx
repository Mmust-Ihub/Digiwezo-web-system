import { subjects } from "@parent/data/constants";

export const PerformanceChart = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-bold mb-6">Grade 6 Performance Overview</h3>
      
      <div className="space-y-4">
        <div className="text-center text-sm font-medium text-muted-foreground mb-4">
          Grade 6 - Term 1 Performance Overview
        </div>
        
        <div className="space-y-3">
          {subjects.map((subject) => (
            <div key={subject.name} className="flex items-center gap-4">
              <div className="w-48 text-sm text-right text-muted-foreground">
                {subject.name}
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                  <div
                    className={`h-full ${subject.color} transition-all duration-500`}
                    style={{ width: `${subject.score}%` }}
                  />
                </div>
                <div className="w-12 text-sm font-medium">{subject.score}%</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground mt-4 px-48">
          <span>0</span>
          <span>20</span>
          <span>40</span>
          <span>60</span>
          <span>80</span>
          <span>100</span>
        </div>
        <div className="text-center text-sm font-medium text-muted-foreground">
          Performance Score (%)
        </div>
      </div>
    </div>
  );
};
