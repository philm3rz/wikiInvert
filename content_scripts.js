a = window.location.href;
if (!a.includes(".m.")) window.location.href = a.slice(0, 11) + "m." + a.slice(11);