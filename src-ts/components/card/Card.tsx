import {
  Card as CardMaterial,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

import { getFormattedDate } from "../../helpers/dateHelper";

interface cardProps {
  props: {
    date_published: string;
    id: string;
    risk_score: number;
    snippet: string;
    title: string;
    url: string;
  };
}

export default function Card({ props }: cardProps) {
  return (
    <CardMaterial>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {getFormattedDate(props.date_published)}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <Link href={props.url} rel="noopener" target="_blank">
            {props.url}
          </Link>
        </Typography>
        <Typography gutterBottom variant="body2" component="p">
          {props.snippet}
        </Typography>
        <Typography align="right" color="textSecondary" variant="body2">
          Risk score: {props.risk_score}
        </Typography>
      </CardContent>
    </CardMaterial>
  );
}
