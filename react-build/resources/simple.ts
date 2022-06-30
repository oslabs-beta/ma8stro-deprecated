import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

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