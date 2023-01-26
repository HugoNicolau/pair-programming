import prisma from "../config/database.js";

async function getCars() {
  const data = prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = prisma.cars.findUnique({where: {id}});
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = prisma.cars.findUnique({where: {licensePlate}});
  return data;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  const data = prisma.cars.create({data: {
    model, licensePlate, year, color
  }});
  return data;
}

async function deleteCar(id: number) {
  const data = prisma.cars.delete({where: {id}});
  return data;
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;