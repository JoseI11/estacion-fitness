const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const funcionalLibreSchedule = [
  { time: '6:30',   classes: ['', 'Funcional', '', 'Funcional', ''] },
  { time: '7:30',   classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
  { time: '9:00',   classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
  { time: '13:00',  classes: ['', 'Funcional', '', 'Funcional', ''] },
  { time: '15:00',  classes: ['', 'Funcional', '', 'Funcional', ''] },
  { time: '16:00',  classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
  { time: '17:00',  classes: ['Funcional', '', 'Funcional', '', 'Funcional'] },
  { time: '19:00',  classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', ''] },
  { time: '20:00',  classes: ['Funcional', '', 'Funcional', '', ''] },
];

const morningSchedule = [
  { time: '6:00 a 11:00', classes: ['Personalizado', 'Personalizado', 'Personalizado', 'Personalizado', 'Personalizado'] },
  { time: '6:30',         classes: ['', 'Funcional', '', 'Funcional', ''] },
  { time: '7:30',         classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
  { time: '9:00',         classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
  { time: '10:00 a 13:00',classes: ['', 'Personalizado', '', 'Personalizado', ''] },
  { time: '10:30 a 11:30',classes: ['', 'Funcional Kids', '', 'Funcional Kids', ''] },
  { time: '11:00 a 13:00',classes: ['Personalizado', '', 'Personalizado', '', 'Personalizado'] },
  { time: '13:00',        classes: ['Cross', 'Funcional', 'Cross', 'Funcional', 'Cross'] },
  { time: '14:00',        classes: ['Cross', 'Funcional', 'Cross', 'Funcional', 'Cross'] },
];

const afternoonSchedule = [
  { time: '15:00',         classes: ['Circuito Fuerza', 'Funcional', 'Circuito Fuerza', 'Funcional', 'Circuito Fuerza'] },
  { time: '16:00',         classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
  { time: '16:00 a 19:00', classes: ['Personalizado', '', 'Personalizado', '', 'Personalizado'] },
  { time: '16:45 a 17:30', classes: ['Funcional Kids', '', 'Funcional Kids', '', ''] },
  { time: '17:00',         classes: ['Funcional', 'Yoga', 'Funcional', 'Yoga', 'Funcional'] },
  { time: '18:00',         classes: ['Baile Fit', '', '', 'Baile Fit', ''] },
  { time: '18:00',         classes: ['', 'Personalizado', '', 'Personalizado', ''] },
  { time: '19:00',         classes: ['Funcional', 'Funcional', 'Funcional', 'Funcional', ''] },
  { time: '20:00',         classes: ['Funcional', '', 'Funcional', '', ''] },
  { time: '20:00',         classes: ['Personalizado', '', 'Personalizado', '', ''] },
  { time: '20:15 a 21:15', classes: ['', 'Funcional', '', 'Funcional', ''] },
  { time: '21:00',         classes: ['Personalizado', 'Personalizado', 'Personalizado', 'Personalizado', 'Personalizado'] },
  { time: '21:00',         classes: ['Hombres', '', 'Hombres', '', 'Hombres'] },
];

function ScheduleBlock({ rows }: { rows: { time: string; classes: string[] }[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl shadow-black/40">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr className="bg-blue-900">
            <th className="px-3 py-2 text-white font-bold text-sm uppercase tracking-widest text-center w-28 border border-blue-950" />
            {days.map((day) => (
              <th
                key={day}
                className="px-3 py-2 text-white font-bold text-sm uppercase tracking-wider text-center border border-blue-950"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-blue-800' : 'bg-blue-800'}>
              <td className="px-3 py-2 text-white font-bold text-xs md:text-sm text-center whitespace-nowrap bg-blue-700 border border-blue-950">
                {row.time}
              </td>
              {row.classes.map((cls, j) => (
                <td
                  key={j}
                  className={`px-2 py-2 text-xs md:text-sm text-center font-semibold border border-blue-950 ${
                    cls
                      ? 'bg-cyan-200 text-blue-900'
                      : 'bg-blue-800'
                  }`}
                >
                  {cls}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default function ScheduleTable() {
  return (
    <div className="space-y-12">
      <ScheduleBlock rows={morningSchedule} />
      <ScheduleBlock rows={afternoonSchedule} />

      <div className="space-y-4">
        <div className="text-center py-4 rounded-2xl bg-black border border-[#5DD9D2]/40">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest text-[#5DD9D2] uppercase">
            Funcional Libre
          </h2>
        </div>
        <ScheduleBlock rows={funcionalLibreSchedule} />
      </div>
    </div>
  );
}
