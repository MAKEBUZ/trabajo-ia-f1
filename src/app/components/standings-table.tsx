interface StandingData {
  position: number
  name?: string
  team: string
  points: number
}

interface StandingsTableProps {
  type: "driver" | "team"
  data: StandingData[]
}

export default function StandingsTable({ type, data }: StandingsTableProps) {
  return (
    <div className="overflow-hidden rounded">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-left">
            <th className="p-2 text-sm font-normal text-gray-400">Pos</th>
            {type === "driver" && <th className="p-2 text-sm font-normal text-gray-400">Driver</th>}
            <th className="p-2 text-sm font-normal text-gray-400">Team</th>
            <th className="p-2 text-right text-sm font-normal text-red-500">Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.position} className="border-b border-gray-800">
              <td className="p-2 text-sm">{item.position}</td>
              {type === "driver" && <td className="p-2">{item.name}</td>}
              <td className="p-2">
                <span
                  className={`text-sm ${
                    item.team.includes("Mercedes")
                      ? "text-cyan-400"
                      : item.team.includes("MCLAREN")
                        ? "text-orange-400"
                        : item.team.includes("Red Bull")
                          ? "text-blue-400"
                          : item.team.includes("Ferrari")
                            ? "text-red-500"
                            : item.team.includes("Williams")
                              ? "text-cyan-200"
                              : ""
                  }`}
                >
                  {item.team}
                </span>
              </td>
              <td className="p-2 text-right text-red-500">{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
