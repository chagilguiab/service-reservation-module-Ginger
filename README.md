# Project Name

SDC Open Table Database

## Related Projects

https://github.com/hrr37-sdc-cerf/service-menu-rebecca

https://github.com/hrr37-sdc-cerf/service_sydney

## Usage

Before seeding database, run brew install mongodb-community@4.0 to install Mongodb (if not previously installed)

Note: if you have not previously tapped the official MongoDB formula repository you will need to run brew tap mongodb/brew prior to running the install command

Run brew services start mongodb-community@4.0 to start the service

Run mongo from the terminal to connect a mongo shell to the running instance

Type 'npm run seed' followed by 'npm run mongo' to seed database

Type 'npm start' to start server

Type 'npm run build' in server to run build and start webpack watching files

Navigate to localhost:3001 in browser to display page/module

## Development

API Endpoints

Read / GET - /:id/:partySize/:date/:time (show available times based on input party size, date and time)

Create / POST - /:id/:partySize/:date/:time (Create reservation for selected date, time and party size. Note: this functionality has not yet been implemented)

Update / PUT - /:id

Delete / DELETE - /:id

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

