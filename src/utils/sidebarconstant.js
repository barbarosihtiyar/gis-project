import React from "react";

export const sidebarConstant = [
  {
    headerText: {
      label: "Filtreleme",
      id: "filterLabel",
    },
  },
  {
    parkingArea: {
      type: "text",
      label: "Otopark Numarası",
      id: "parkingNumberInput",
    },
    districtArea: {
      type: "text",
      label: "İlçe",
      id: "districtInput",
    },
    locationArea: {
      type: "text",
      label: "Konum İsmi",
      id: "locationNameInput",
    },
    parkingDescriptionArea: {
      type: "text",
      label: "Otopark Açıklaması",
      id: "parkingDescriptionInput",
    },
    workingHourArea: {
      type: "text",
      label: "Çalışma Saatleri",
      id: "workingHourInput",
    },
    capacityArea: {
      type: "text",
      label: "Kapasite",
      id: "capacityInput",
    },
  },
  {
    submit: {
      type: "button",
      label: "Otoparkları Listele",
      id: "submitButton",
    },
  },
  {
    clearText: {
      label: "Temizle",
      id: "clearLabel",
    },
  },
];
