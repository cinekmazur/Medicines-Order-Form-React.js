const defaultOrders = [
  {
    id: 1,
    medicine: "Vyvanse",
    time: "8:00",
    date: "2020-06-26",
    amount: "5",
    department: "Anaesthesiology and Adult Intensive Care",
    userData: {
      name: "Marcin",
      surname: "Mazur",
      pin: "7676",
    },
  },
  {
    id: 2,
    medicine: "Crstor",
    time: "22:00",
    date: "2020-07-16",
    amount: "10",
    department: "General and Vascular Surgical",
    userData: {
      name: "Szewczyk",
      surname: "Dratewka",
      pin: "5454",
    },
  },
];

const departments = [
  {
    id: 1,
    value: "Anaesthesiology and Adult Intensive Care",
  },
  {
    id: 2,
    value: "Anesthesiology and Child Intensive Care and Neonathology",
  },
  {
    id: 3,
    value: "Child Surgical",
  },
  {
    id: 4,
    value: "General and Vascular Surgical",
  },
  {
    id: 5,
    value: "Casualty and Orthopaedic Surgical",
  },
  {
    id: 6,
    value: "Dermatology",
  },
  {
    id: 7,
    value: "Day Reahabilitation",
  },
];

const listOfMedicines = [
  {
    id: 1,
    value: "Synthroid",
  },
  {
    id: 2,
    value: "Crestor",
  },
  {
    id: 3,
    value: "Ventolin",
  },
  {
    id: 4,
    value: "Nexium",
  },
  {
    id: 5,
    value: "Advair Diskus",
  },
  {
    id: 6,
    value: "Lantus Solostar",
  },
  {
    id: 7,
    value: "Vyvanse",
  },
  {
    id: 8,
    value: "Ativan",
  },
  {
    id: 9,
    value: "Spiriva",
  },
  {
    id: 10,
    value: "Januvia",
  },
];

const times = [
  {
    id: 1,
    value: "8:00",
  },
  {
    id: 2,
    value: "15:00",
  },
  {
    id: 3,
    value: "22:00",
  },
];

export { defaultOrders, listOfMedicines, departments, times };
