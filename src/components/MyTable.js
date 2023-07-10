import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { isparkLocation } from "../utils/constant";
import { useMainContext } from "../context/context";

const MyTable = ({ handleCellClick }) => {
  const cacheSidebar = window.localStorage.getItem("sidebarLocation");
  const { stateSidebar } = useMainContext();

  return stateSidebar ? (
    <TableContainer
      style={
        cacheSidebar != null
          ? cacheSidebar == "true"
            ? {
                left: "0",
                bottom: "0",
                width: "1000px",
                height: "300px",
                position: "fixed",
                background: "#fff",
              }
            : {
                right: "0",
                bottom: "0",
                width: "1000px",
                height: "300px",
                position: "fixed",
                background: "#fff",
              }
          : stateSidebar
          ? {
              left: "0",
              bottom: "0",
              width: "1000px",
              height: "300px",
              position: "fixed",
              background: "#fff",
            }
          : {
              right: "0",
              bottom: "0",
              width: "1000px",
              height: "300px",
              position: "fixed",
              background: "#fff",
            }
      }
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>OTOPARK NO</TableCell>
            <TableCell>İLÇE</TableCell>
            <TableCell>KONUM İSMİ</TableCell>
            <TableCell>OTOPARK AÇIKLAMASI</TableCell>
            <TableCell>ÇALIŞMA SAATLERİ</TableCell>
            <TableCell>KAPASİTE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isparkLocation.map((station, index) => (
            <TableRow key={index}>
              <TableCell>{station._ID}</TableCell>
              <TableCell onClick={(e) => handleCellClick(station)}>
                {station.COUNTY_NAME}
              </TableCell>
              <TableCell onClick={(e) => handleCellClick(station)}>
                {station.LOCATION_NAME}
              </TableCell>
              <TableCell onClick={(e) => handleCellClick(station)}>
                {station.PARK_TYPE_DESC}
              </TableCell>
              <TableCell onClick={(e) => handleCellClick(station)}>
                {station.WORKING_TIME}
              </TableCell>
              <TableCell onClick={(e) => handleCellClick(station)}>
                {station.CAPACITY_OF_PARK}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <></>
  );
};

export default MyTable;
