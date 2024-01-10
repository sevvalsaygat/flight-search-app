export interface AirportType {
  refCode:
    | "SAW"
    | "IST"
    | "ADB"
    | "ESB"
    | "AYT"
    | "GZP"
    | "ADA"
    | "ADF"
    | "AJI"
    | "MZH"
    | "EDO"
    | "BZI"
    | "BGG"
    | "YEI"
    | "CKZ"
    | "DNZ"
    | "DIY"
    | "EZS"
    | "ERC"
    | "ERZ"
    | "AOE"
    | "GZT"
    | "YKO"
    | "HTY"
    | "ISE"
    | "KSY"
    | "KFS"
    | "ASR"
    | "KCO"
    | "KYA"
    | "KZR"
    | "MLX"
    | "KCM"
    | "MQM"
    | "BJV"
    | "DLM"
    | "MSR"
    | "NAV"
    | "OGU"
    | "RZV"
    | "SZF"
    | "SXZ"
    | "NOP"
    | "VAS"
    | "TEQ"
    | "TJK"
    | "TZX"
    | "GNY"
    | "USQ"
    | "VAN"
    | "ONQ"
    | "BAL"
    | "NKT"
    | "IGD"
    | "ECN";
  city: string;
  name: string;
}

export interface AirlineCompanyType {
  name: "THY" | "PEGASUS" | "ANADOLUJET";
  logo: string;
}

export interface FlightType {
  to: AirportType;
  from: AirportType;
  departure: string;
  arrival: string;
  company: AirlineCompanyType;
  remainingSeatCount: number;
  isAvailable: boolean;
  price: number;
  code: string;
  duration: {
    hour: number;
    minute: number;
  };
  class: "ECONOMY" | "BUSINESS";
  baggage: 15 | 30;
}

export interface ErrorResponseType {
  message: string;
}

export interface ListResponseType<T> {
  data: T[];
}
