# RxJSUnsubscribe

> Always unsubscribe your RxJS calls

## Run it yourself (Angular-based example)

```
npm run api
npm run start
```

_API returns Date.now() with 15 seconds delay on http://localhost:3000_

Check it out on http://localhost:4200

**Result**

```
[Bar] Loaded
[Bar] Destroyed
[Foo] Loaded
[Bar-bad] Response: 1546201734221
[Foo-good] Response: 1546201757711
[Foo-bad] Response: 1546201757711
```

## Good

Unsubscribe HTTP calls on unload. **Why?** We don't care about the HTTP response anymore. Hence, 
it's a memory leak.

```
// On load / during execution
subject = new Subject<void>();

this.http.get('//localhost:3000').pipe(
  takeUntil(this.subject),
).subscribe((val) => {
  console.info(`[Foo-good] Response: ${val}`);
});

// On unload
this.subject.next();
this.subject.complete();
```

## Bad

HTTP calls were never unsubscribed. Generally, HTTP calls do resolve pretty quickly, but timeouts
will lead to memory leaks.

Additionally, socket-like (i.e. socket.io, firebase) solutions which listen to endless responses
will remain alive during the whole execution of the app.

```
this.http.get('//localhost:3000').subscribe((val) => {
  console.info(`[Foo-bad] Response: ${val}`);
});
```

## License

MIT © Gerard Rovira Sánchez
