import { Request, Response, NextFunction } from 'express';
const express = require('express');
import axios, { AxiosResponse } from 'axios';

const app = express();


app.use(express.json())
app.use(express.urlencoded());


const prometheusURL: string = 'http://127.0.0.1:9090/api/v1/';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const fetchAlerts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await fetch(`${prometheusURL}/rules`);
      res.locals.alerts = await data.json();
      return next();
    } catch (err) {
      return next({
        log: 'Error in alertsController.fetchAlerts',
      });
    }
  };
